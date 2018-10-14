<template>
  <div id="app">
    <Button>
      Text
    </Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'app',
  components: {
    Button
  },
  methods: {
    log: () => console.log('clicked')
  }
}
</script>