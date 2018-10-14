<template>
    <fieldset class="bn p0">
        <legend class="avenir fw7 mb2 f3">{{ legend }}</legend>
        <div class="flex items-center mb2" v-for="(option, index) in options" :key="index">
            <input class="mr2" type="checkbox" :id="option.name" value="spacejam">
            <label :for="option.name" class="athelas lh-copy flex-auto f4 ml2">{{ option.label }}</label>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: {
        legend: String,
        options: Array
    }
}
</script>

<style scoped>
fieldset {
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
}
input[type="checkbox"] {
    opacity: 0;
}
label::before {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -1.85rem;
    top: 0.20rem;
    content: "";
    height: 1.25rem;
    width: 1.25rem;
    font-size: 1.35rem;
    border: 1px solid rgba(0,0,0,.6);   
}
label {
    position: relative;
    user-select: none;
}
input[type="checkbox"]:checked + label::before {
    content:'\2714';
}
</style>
