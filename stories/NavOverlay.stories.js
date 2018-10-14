import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import NavOverlay from '@/components/NavOverlay.vue';

storiesOf('NavOverlay', module)
  .add('normal', () => ({
    components: { NavOverlay },
    template: '<NavOverlay/>'
  }));