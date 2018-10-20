<template>
    <div 
        class="avenir ba w4 tc pv2 animated shadow-4 fw6 f3" 
        :class="{'shadow-5': !animated, 'pressed': animated}" 
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
        transition: all 0.075s ease;
        cursor: default;
        user-select: none;
    }
    .pressed {
        background-color: #f4f4f4;
    }
</style>