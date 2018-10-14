import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';

import Card from '@/components/Card.vue';

storiesOf('Card', module)
  .addDecorator(centered)
  .add('normal', () => ({
    components: { Card },
    methods: {
      onClick() {
        action('clicked')
      }
    },
    template: `
      <Card>
        <p>
        Lyft man bun meditation iceland snackwave chia. Freegan iceland vape PBR&B shabby chic migas retro, cred distillery lumbersexual neutra twee authentic XOXO iPhone. Blog sartorial etsy shaman vinyl, try-hard pabst. Fixie forage gastropub, iceland microdosing before they sold out helvetica. Ethical bespoke stumptown, unicorn next level la croix thundercats brooklyn.
        </p>
      </Card>
    `
  }));