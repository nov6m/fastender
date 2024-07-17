<template>
  <div class="advantages contrast">
    <v-container>
      <div class="advantages__title primaryText--text text-center">
        Преимущества сервиса
      </div>
      <div class="mt-10">
        <div v-if="!isAdaptive" class="advantages__flex">
          <div class="advantages__card">
            <div class="d-flex align-center">
              <img src="@/static/svg/transparency-bidding.svg" class="advantages__card-image mr-5" />
              <div class="advantages__card-title primaryText--text">
                Прозрачность торгов
              </div>
            </div>
            <div class="advantages__card-description mt-5">
              В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы
            </div>
          </div>
          <div class="advantages__card">
            <div class="d-flex align-center">
              <img src="@/static/svg/short-term.svg" class="advantages__card-image mr-5" />
              <div class="advantages__card-title primaryText--text">
                Короткий срок
              </div>
            </div>
            <div class="advantages__card-description mt-5">
              В своём стремлении повысить качество жизни, они забывают, что начало повседневной
            </div>
          </div>
          <div class="advantages__card">
            <div class="d-flex align-center">
              <img src="@/static/svg/favorable-rates.svg" class="advantages__card-image mr-5" />
              <div class="advantages__card-title primaryText--text">
                Выгодные тарифы
              </div>
            </div>
            <div class="advantages__card-description mt-5">
              В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
            </div>
          </div>
          <div class="advantages__card">
            <div class="d-flex align-center">
              <img src="@/static/svg/single-showcase.svg" class="advantages__card-image mr-5" />
              <div class="advantages__card-title primaryText--text">
                Единая ветрина
              </div>
            </div>
            <div class="advantages__card-description mt-5">
              В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
            </div>
          </div>
          <div class="advantages__card">
            <div class="d-flex align-center">
              <img src="@/static/svg/generating-reports.svg" class="advantages__card-image mr-5" />
              <div class="advantages__card-title primaryText--text">
                Формирование отчетов
              </div>
            </div>
            <div class="advantages__card-description mt-5">
              В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
            </div>
          </div>
        </div>
        <div v-else>
          <v-expansion-panels accordion tile flat class="advantages__expansion">
            <v-expansion-panel>
              <v-expansion-panel-header hide-actions>
                <div class="d-flex align-center">
                  <img src="@/static/svg/short-term.svg" class="advantages__card-image mr-5" />
                  <div class="advantages__card-title primaryText--text">
                    Короткий срок
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="advantages__card-description mt-5">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header hide-actions>
                <div class="d-flex align-center">
                  <img src="@/static/svg/short-term.svg" class="advantages__card-image mr-5" />
                  <div class="advantages__card-title primaryText--text">
                    Короткий срок
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="advantages__card-description mt-5">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header hide-actions>
                <div class="d-flex align-center">
                  <img src="@/static/svg/favorable-rates.svg" class="advantages__card-image mr-5" />
                  <div class="advantages__card-title primaryText--text">
                    Выгодные тарифы
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="advantages__card-description mt-5">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header hide-actions>
                <div class="d-flex align-center">
                  <img src="@/static/svg/single-showcase.svg" class="advantages__card-image mr-5" />
                  <div class="advantages__card-title primaryText--text">
                    Единая ветрина
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="advantages__card-description mt-5">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header hide-actions>
                <div class="d-flex align-center">
                  <img src="@/static/svg/generating-reports.svg" class="advantages__card-image mr-5" />
                  <div class="advantages__card-title primaryText--text">
                    Формирование отчетов
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="advantages__card-description mt-5">
                  В своём стремлении повысить качество жизни, они забывают, что начало повседневной 
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import screenSize from '@/core/mixins/screenSize';

export default {
  name: 'GridAdvantages',
  mixins: [screenSize],
  computed: {
    isAdaptive() {
      return this.isMobile || this.isTablet
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages {

  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__flex {
    display: flex;
    row-gap: 80px;
    column-gap: 220px;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media (max-width:1440px) {
      column-gap: 90px;
      row-gap: 40px;
    }
  }

  &__card {
    width: 280px;
    &-image {
      width: 42px;
      height: 42px;

      @media (max-width:768px) {
        width: 36px;
        height: 36px;
      }
    }

    &-title {
      font-size: 20px;
      font-weight: 600;

      @media (max-width:768px) {
        font-size: 18px;
      }
    }

    &-description {
      font-size: 18px;
    }
  }

  &__expansion {
    ::v-deep {
      .v-expansion-panel {
        &:not(:first-child) {
          padding: 30px 0 0 0;
        }
        &:first-child {
          padding: 0
        }
      }

      .v-expansion-panel-header {
        padding: 0;
      }

      .v-expansion-panel {
        border-bottom: 1px solid #D5D5D5;
      }

      .v-expansion-panel-content__wrap {
        padding-left: unset;
        padding-right: unset;
      }
    }
  }
}
</style>