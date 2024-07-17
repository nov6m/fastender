<template>
  <v-select
    v-bind="$attrs"
    v-on="$listeners"
    outlined
    class="v-select-custom rounded-lg"
  />
</template>

<script>
export default {
  name: 'VSelectCustom'
}
</script>

<style lang="scss" scoped>
.v-select-custom {
  ::v-deep {
    &.v-select {
      color: #000000 !important;

      .v-label {
        color: #000000 !important;
      }
    }
  }
}
</style>