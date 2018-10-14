<template>
    <div class="avenir measure">
        <label for="name" class="f3 b db mb2">{{ label }}</label>
        <input class="athelas input-reset ba b--black-20 pa2 mb2 db w-100 f4" :type="inputType">
        <small class="athelas f5 black-60 db mb2">{{ helper }}</small>
  </div>
</template>

<script>
export default {
    props: {
        inputType: String,
        label: String,
        helper: String
    },
}
</script>

<style scoped>
    input { 
        outline: none; 
    }
    .animated {
        transition: box-shadow 0.075s ease-in-out;
    }
</style>