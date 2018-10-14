import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';


import Input from '@/components/Input.vue';

storiesOf('Input', module)
  .addDecorator(centered)
  .add('normal', () => ({
    components: { Input },
    data() {
      return {
        inputType: 'email',
        label: 'Email',
        helper: 'Enter your email'
      }
    },
    template: '<Input :inputType="inputType" :label="label" :helper="helper"/>'
  }));