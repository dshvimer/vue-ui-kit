import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Nav from '@/components/Nav.vue';

storiesOf('Nav', module)
  .add('normal', () => ({
    components: { Nav },
    template: '<Nav/>'
  }));