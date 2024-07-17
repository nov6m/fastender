import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1774E2',
        primaryText: '#000000',
        secondaryText: '#252525',
        tertiaryText: '#848484',
        secondary: '#1160BC',
        background: '#4A4A4A',
        backgroundSecondary: '#F5F5F5',
        backgroundTertiary: '#1F1F1F',
        contrast: '#FFFFFF'
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
