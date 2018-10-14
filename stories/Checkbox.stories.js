import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Checkbox from '@/components/Checkbox.vue';

storiesOf('Checkbox', module)
  .addDecorator(centered)
  .add('normal', () => ({
    components: { Checkbox },
    data() {
      return {
        legend: 'Checkbox',
        options: [
          { name: 'first', label: 'First', value: false },
        ]
      }
    },
    template: '<Checkbox :options="options" :legend="legend"/>'
  }))
  .add('list', () => ({
    components: { Checkbox },
    data() {
      return {
        legend: 'Checkbox list',
        options: [
          { name: 'first', label: 'First', value: false },
          { name: 'second', label: 'Second', value: false }
        ]
      }
    },
    template: '<Checkbox :options="options" :legend="legend"/>'
  }));