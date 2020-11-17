<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>
<script>
export default {
    name: "App"
};
</script>
<style>
html,
body {
    padding: 0;
    margin: 0;
    background-color: #000;
}

.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.wrapper:before {
    content: " ";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

h1, h2, h3, h4, h5 {
    text-align: left;
}

h2 {
    color: #ccc;
    font-size: 2em;
}

h3 {
    color: #ccc;
    font-size: 1.5em;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.highlight-dark {
    color: lightskyblue
}

.highlight-light {
    color: #1974D2
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 500ms;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slow-fade-enter-active,
.slow-fade-leave-active {
  transition-duration: 1000ms;
  transition-property: opacity;
  transition-timing-function: ease;
}

.slow-fade-enter,
.slow-fade-leave-active {
  opacity: 0
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition-duration: 2000ms;
  transition-property: opacity;
  transition-timing-function: ease;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0
}

@keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
}

@keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
}
</style>
