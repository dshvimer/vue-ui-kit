import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';


import Login from '@/components/Login.vue';

storiesOf('Login', module)
  .addDecorator(centered)
  .add('normal', () => ({
    components: { Login },
    template: '<Login/>'
  }));