<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    class="v-input-custom"
  />
</template>

<script>
export default {
  name: 'VInputCustom'
}
</script>

<style lang="scss" scoped>
.v-input-custom {
  border-radius: 6px;
  width: 100%;
  ::v-deep {
    &.v-input {
      color: #848484 !important;

      .v-label {
        color: #848484 !important;
      }

      .v-input--is-focused {
        & fieldset {
          border: 1px solid #848484;
        }
      }

      .v-input__slot {
        background: #4F4F4F !important;
        min-height: 40px;

        & > fieldset {
          color: #848484 !important;
        }

        &:hover {
          & > fieldset {
            color: #848484 !important;
          }
        }

        & input {
          color: #D5D5D5;

          & > div {
            color: #D5D5D5;
          }
        }
      }

      &.error--text {
        color: #FF0011 !important;

        .v-label {
          color: #FF0011 !important;
        }
      }
    }
  }
}
</style>