import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Button from '@/components/Button.vue';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('normal', () => ({
    components: { Button },
    methods: {
      onClick() {
        action('clicked')
      }
    },
    template: '<Button @click="onClick">Text</Button>'
  }));