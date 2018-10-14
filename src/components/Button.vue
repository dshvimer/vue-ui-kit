<template>
    <div 
        class="avenir ba w4 tc pv2 animated shadow-4 b f3" 
        :class="{'shadow-5': !animated}" 
        @transitionend="transitionDone"
        @click="onClick">
        <slot/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animated: false,
        }
    },
    methods: {
        animate() {
            this.animated = true
            this.rippling = true
        },
        transitionDone() {
            this.animated = false
        },
        onClick() {
            this.animate()
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
    .animated {
        transition: box-shadow 0.075s ease-in-out, background-color .15s ease-in-out;
        cursor: default;
        user-select: none;
    }
</style>