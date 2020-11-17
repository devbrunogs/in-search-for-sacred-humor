<template>
    <div class="mood-wrapper">
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    name: "Mood"
};
</script>

<style scoped>
.mood-wrapper {
    position: relative;
    z-index: 3;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
    max-width: 1000px
}
</style>
