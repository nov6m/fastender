<template>
  <section class="stepper primary">
    <v-container>
      <div v-if="isAdaptive" class="stepper__title contrast--text text-center">
        Закупка через FASTENDER это просто
      </div>
      <div v-else class="stepper__title contrast--text text-center">
        Стать партнером FAST очень просто:
      </div>
      <div class="stepper__flex d-flex justify-space-between mt-10">
        <canvas ref="line" class="stepper__line" />
         <!-- <img src="@/static/svg/stepper-line-horizontal.png" class="stepper__line" /> -->
        <div class="stepper__step">
          <div class="stepper__step-number-container d-flex justify-center">
            <img ref="circle1" src="@/static/svg/step-1.svg" alt="step icon" class="stepper__step-number" />
          </div>
          <div>
            <div class="d-flex align-center mt-3">
              <img src="@/static/svg/door.svg" alt="door icon" class="stepper__step-icon mr-5" />
              <div class="stepper__step-title contrast--text">
                Зарегистрируйтесь
              </div>
            </div>
            <div class="stepper__step-description contrast--text mt-3 ml-14">
              Быстро в два клика пройдите простую регистрацию
            </div>
          </div>
        </div>
        <div  class="stepper__step">
          <div>
            <div class="d-flex align-center">
              <img src="@/static/svg/chemistry.svg" alt="chemistry icon" class="stepper__step-icon mr-5" />
              <div class="stepper__step-title contrast--text">
                Попробуйте
              </div>
            </div>
            <div class="stepper__step-description contrast--text mt-3 ml-14">
              Бесплатный доступ с возможностью просмотра закупок
            </div>
          </div>
          <div class="stepper__step-number-container d-flex justify-center">
            <img ref="circle2" src="@/static/svg/step-2.svg" alt="step icon" class="stepper__step-number mt-3" />
          </div>
        </div>
        <div class="stepper__step">
          <div class="stepper__step-number-container d-flex justify-center">
            <img ref="circle3" src="@/static/svg/step-3.svg" alt="step icon" class="stepper__step-number" />
          </div>
          <div>
            <div class="d-flex align-center mt-3">
              <img src="@/static/svg/plant.svg" alt="plant icon" class="stepper__step-icon mr-5" />
              <div class="stepper__step-title contrast--text">
                Получите лучшие условия
              </div>
            </div>
            <div class="stepper__step-description contrast--text mt-3 ml-14">
              Для участия в закупках выберете подходящую лицензию
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import screenSize from '@/core/mixins/screenSize';

export default {
  name: 'StepperDefault',
  mixins: [screenSize],
  data() {
    return {
      cirleSize: 50,
      circle1Center: [0, 0],
      circle2Center: [0, 0],
      circle3Center: [0, 0],
    }
  },
  computed: {
    isAdaptive() {
      return this.isMobile || this.isTablet
    }
  },
  watch: {
    curWidth: {
      handler() {
        this.circle1Center = this.getCircle1Center()
        this.circle2Center = this.getCircle2Center()
        this.circle3Center = this.getCircle3Center()

        const el = this.$refs.line
        if (el instanceof HTMLElement) {
          const ctx = el.getContext("2d");

          ctx.canvas.width  = el.offsetWidth;
          ctx.canvas.height = el.offsetHeight;

          if (!this.isAdaptive) {
            ctx.setLineDash([3, 4])
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.circle1Center[0], this.circle1Center[1]);
            ctx.bezierCurveTo(
              this.getMiddlePoint(this.circle1Center[0], this.circle2Center[0]),
              this.circle1Center[1],
              this.getMiddlePoint(this.circle1Center[0], this.circle2Center[0]),
              this.circle2Center[1],
              this.circle2Center[0],
              this.circle2Center[1]
            );
            ctx.stroke();
            ctx.setLineDash([3, 4])
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.circle2Center[0], this.circle2Center[1]);
            ctx.bezierCurveTo(
              this.getMiddlePoint(this.circle2Center[0], this.circle3Center[0]),
              this.circle2Center[1],
              this.getMiddlePoint(this.circle2Center[0], this.circle3Center[0]),
              this.circle3Center[1],
              this.circle3Center[0],
              this.circle3Center[1]);
            ctx.stroke();
          } else {
            ctx.setLineDash([3, 4])
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.circle1Center[0], this.circle1Center[1]);
            ctx.bezierCurveTo(
              this.circle1Center[0],
              this.getMiddlePoint(this.circle1Center[1], this.circle2Center[1]),
              this.circle2Center[0],
              this.getMiddlePoint(this.circle1Center[1], this.circle2Center[1]),
              this.circle2Center[0],
              this.circle2Center[1]
            );
            ctx.stroke();
            ctx.setLineDash([3, 4])
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(this.circle2Center[0], this.circle2Center[1]);
            ctx.bezierCurveTo(
              this.circle2Center[0],
              this.getMiddlePoint(this.circle2Center[1], this.circle3Center[1]),
              this.circle3Center[0],
              this.getMiddlePoint(this.circle2Center[1], this.circle3Center[1]),
              this.circle3Center[0],
              this.circle3Center[1]);
            ctx.stroke();
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    getMiddlePoint(x1, x2) {
      return x1 + ((x2 - x1) / 2)
    },
    getCircle1Center() {
      if (!(this.$refs.circle1 instanceof HTMLElement)) {
        return [0, 0]
      }

      const el = this.$refs.circle1
      const topCenter = el.offsetTop + (this.cirleSize / 2)
      const leftCenter = el.offsetLeft + (this.cirleSize / 2)
      return [leftCenter, topCenter]
    },
    getCircle2Center() {
      if (!(this.$refs.circle2 instanceof HTMLElement)) {
        return [0, 0]
      }

      const el = this.$refs.circle2
      const topCenter = el.offsetTop + (this.cirleSize / 2)
      const leftCenter = el.offsetLeft + (this.cirleSize / 2)
      return [leftCenter, topCenter]
    },
    getCircle3Center() {
      if (!(this.$refs.circle3 instanceof HTMLElement)) {
        return [0, 0]
      }

      const el = this.$refs.circle3
      const topCenter = el.offsetTop + (this.cirleSize / 2)
      const leftCenter = el.offsetLeft + (this.cirleSize / 2)
      return [leftCenter, topCenter]
    }
  }
}
</script>

<style lang="scss" scoped>
.stepper {
  &__title {
    font-size: 32px;
    font-weight: 700;

    @media (max-width:768px) {
      font-size: 28px;
    }
  }

  &__flex {
    column-gap: 30px;
    position: relative;

    @media (max-width:768px) {
      flex-direction: column;
      row-gap: 80px;
    }
  }

  &__step {
    width: 276px;
    z-index: 10;

    @media (max-width:768px) {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: start;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;

      @media (max-width:1024px) {
        font-size: 18px;
      }
    }

    &-description {
      font-size: 18px;

      @media (max-width:1024px) {
        font-size: 15px;
      }
    }

    &-icon {
      width: 42px;
      height: 42px;

      @media (max-width:1024px) {
        width: 36px;
        height: 36px;
      }
    }

    &-number {
      width: 50px;
      height: 50px;

      &-container {
        @media (max-width:768px) {
          align-items: center
        }
      }
    }
  }

  &__line {
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>