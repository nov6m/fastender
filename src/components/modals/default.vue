<template>
  <div class="modal contrast rounded-xxl">
    <v-icon @click="closeHandler" class="modal__close secondary--text">
      mdi-close-circle-outline
    </v-icon>
    <div v-if="!success" class="modal__form">
      <div class="modal__title secondary--text mb-4">
        Заполните информацию о себе и зарабатывайте со Спортмастером
      </div>
      <v-form v-model="valid">
        <v-input-custom
          v-model="form.surname"
          label="Фамилия *"
          required
          :rules="rules.surname"
          :disabled="disabled.surname"
        />
        <v-input-custom
          v-model="form.name"
          label="Имя *"
          required
          :rules="rules.name"
          :disabled="disabled.name"
          />
        <v-input-custom
          v-model="form.patronymic"
          label="Отчество *"
          required
          :rules="rules.patronymic"
          :disabled="disabled.patronymic"
          />
        <v-input-custom
          v-model="form.phone"
          label="Телефон *"
          required
          :rules="rules.phone"
          :disabled="disabled.phone"
          />
        <v-input-custom
          v-model="form.email"
          label="Email *"
          required
          :rules="rules.email"
          :disabled="disabled.email"
          />
        <v-select-custom
          v-model="form.work"
          label="Укажите, чем вы занимаетесь *"
          :disabled="disabled.work"
          />
      </v-form>
      <v-button block @click="success = true">
        Присоединиться
      </v-button>
    </div>
    <div v-if="success" class="modal__notify d-flex flex-column align-center">
      <img src="@/assets/svg/success.svg" alt="success icon" class="modal__notify-icon">
      <div class="modal__notify-success secondary--text">
        <div class="text-center">
          Успешно!
        </div>
        <br>
        <div class="text-center">
          Мы уже почти все приготовили для вашей работы!
        </div>
        <br>
        <div class="text-center">
          В ближайшее время программа будет запущена, и мы сразу сообщим вам о возможности начать зарабатывать со Спортмастер!
        </div>
      </div>
      <v-button block class="modal__notify-button" @click="closeHandler">
        Понятно
      </v-button>
    </div>
  </div>
</template>

<script>
import { VButton, VInputCustom, VSelectCustom } from '@/components/ui';

export default {
  name: 'ModalDefault',
  components: { VButton, VInputCustom, VSelectCustom },
  data() {
    return {
      valid: false,
      success: false,
      form: {
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        work: ''
      },
      rules: {
        surname: [
          v => !!v || 'Поле "Фамилия" обязательно',
          v => v.length >= 2 || 'Поле "Фамилия" не может состоять из 1 символа'
        ],
        name: [
          v => !!v || 'Поле "Имя" обязательно',
          v => v.length >= 2 || 'Поле "Имя" не может состоять из 1 символа'
        ],
        patronymic: [
          v => !!v || 'Поле "Отчество" обязательно',
          v => v.length >= 2 || 'Поле "Отчество" не может состоять из 1 символа'
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
      disabled: {
        surname: false,
        name: true,
        patronymic: true,
        phone: true,
        email: true,
        work: true
      }
    }
  },
  watch: {
    'form.surname': {
      handler(newValue) {
        newValue ? this.disabled.name = false : this.disabled.name = true 
      }
    },
    'form.name': {
      handler(newValue) {
        newValue ? this.disabled.patronymic = false : this.disabled.patronymic = true 
      }
    },
    'form.patronymic': {
      handler(newValue) {
        newValue ? this.disabled.phone = false : this.disabled.phone = true 
      }
    },
    'form.phone': {
      handler(newValue) {
        newValue ? this.disabled.email = false : this.disabled.email = true 
      }
    },
    'form.email': {
      handler(newValue) {
        newValue ? this.disabled.work = false : this.disabled.work = true 
      }
    }
  },
  methods: {
    closeHandler() {
      this.success = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  padding: 40px;
  position: relative;
  overflow: hidden;

  @media(max-width: 768px) {
    padding: 20px;
  }

  .modal__close {
    opacity: 0.3;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .modal__title {
    font-size: 18px;
    width: 95%;
  }

  .modal__notify-icon {
    margin-bottom: 30px;

    @media(max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .modal__notify-button {
    margin-top: 40px;

    @media(max-width: 768px) {
      margin-top: 20px;
    }
  }
}
</style>