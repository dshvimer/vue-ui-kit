<template>
    <div>
        <div class="avenir overlay flex" :class="{ open }">
            <nav class="flex flex-column flex-auto justify-center items-center f1">
                <a class="link dim white dib ma3 w-100 tc hover-moon-gray" href="#" title="Home">Home</a>
                <a class="link dim white dib ma3 w-100 tc hover-moon-gray" href="#" title="About">About</a>
                <a class="link dim white dib ma3 w-100 tc hover-moon-gray" href="#" title="Store">Store</a>
                <a class="link dim white dib ma3 w-100 tc hover-moon-gray" href="#" title="Contact">Contact</a>
            </nav>
        </div>
        <div class="button_container" :class="{ 'active': open }" @click="onToggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button'
export default {
    components: {
        Button
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        onToggle() {
            this.open = !this.open
        }
    }
}
</script>

<style scoped>
a {
    position: relative;
    opacity: 0;
}
.overlay {
    position: fixed;
    background: #333;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    opacity: 0;
    visibility: hidden;
    transition: opacity .35s, visibility .35s, height .35s;
    overflow: hidden;
}
.open {
    opacity: .9;
    visibility: visible;
    height: 100%;
}
.button_container {
  position: fixed;
  bottom: 3%;
  right: 3%;
  height: 3rem;
  width: 3rem;
  z-index: 100;
  transition: opacity .25s ease;
}
span {
    background: black;
    border: none;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition:  all .35s ease;
}
span:nth-of-type(2) {
      top: 11px;
}
span:nth-of-type(3) {
      top: 22px;
}
.active .top {
    transform: translateY(11px) translateX(0) rotate(45deg);
    background: white;
}
.active .middle {
    opacity: 0;
    background: white;
}

.active .bottom {
    transform: translateY(-11px) translateX(0) rotate(-45deg);
    background: white;
}
.open a {
    animation: fadeInRight .5s ease forwards;
    animation-delay: .15s;
}  
a:nth-of-type(2) {
    animation-delay: .2s;
}
a:nth-of-type(3) {
    animation-delay: .25s;
}
a:nth-of-type(4) {
    animation-delay: .30s;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
