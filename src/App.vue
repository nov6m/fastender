<template>
  <v-app>
    <div class="background">
      <HeaderDefault />
      <router-view /> 
      <FooterDefault />
    </div>
  </v-app>
</template>

<script>
import { HeaderDefault, FooterDefault } from '@/components/layouts'

export default {
  name: 'App',
  components: {
    HeaderDefault,
    FooterDefault
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_base.scss';
</style>
