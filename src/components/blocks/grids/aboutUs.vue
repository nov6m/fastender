<template>
  <div class="about-us">
    <v-container>
      <div class="about-us__title contrast--text text-center">
        О сервисе
      </div>
      <div class="about-us__grid mt-10 mt-md-15">
        <div class="about-us__card contrast--text">
          Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы могут быть объявлены нарушающими общечеловеческие нормы этики и морали! Наше дело не так однозначно, как может показаться: перспективное планирование позволяет оценить значение первоочередных требований. 
        </div>
        <div class="about-us__card contrast--text">
          Картельные сговоры не допускают ситуации, при которой сделанные на базе интернет-аналитики выводы могут быть объявлены нарушающими общечеловеческие нормы этики и морали! Наше дело не так однозначно, как может показаться: перспективное планирование позволяет оценить значение первоочередных требований. 
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GridAboutUs'
}
</script>

<style lang="scss" scoped>
.about-us {

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;

    @media (min-width:768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__card {
    font-size: 22px;
    font-weight: 500;

    @media (max-width:768px) {
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>