<template>
  <v-btn
    color="primary"
    tile
    v-bind="$attrs"
    v-on="$listeners"
    class="v-button"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'VButton'
}
</script>

<style lang="scss" scoped>
.v-button {
  font-size: 18px;
  border-radius: 10px;
  font-weight: 600;

  @media(max-width:768px) {
    font-size: 16px;
  }

  ::v-deep {
    &.v-btn {
      height: 55px;
      padding: 0 40px;
      text-transform: none;
    }
  }
}
</style>