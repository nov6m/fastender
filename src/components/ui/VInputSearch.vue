<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    regular
    class="v-input-search"
  />
</template>

<script>
export default {
  name: 'VInputSearch',
}
</script>

<style lang="scss" scoped>
.v-input-search {
  width: 90px;
  @media (max-width: 768px) {
    width: 100%;
  }
  ::v-deep {
    &.v-input {

      .v-input__slot {
        background: transparent!important;
        min-height: 40px;
      }

      .v-input__prepend-inner {
        margin-top: 8px;
      }

      input,
      textarea {
        color: #848484 !important;
      }

      &.error--text {
        color: #FF0011 !important;

        .v-label {
          color: #FF0011 !important;
        }
      }
    }

    &.primary--text {
      .v-icon {
        color: #848484 !important;
      }
    }

    & * {
      color: #848484 !important;
      border-color: #848484 !important;

      &:after,
      &:before {
        border-color: #848484 !important;
      }
    }
  }
}
</style>