<template>
    <transition name="slow-fade" mode="out-in">
        <div v-if="showModal" class="modal-wrapper">
            <p>{{modalMessage}}</p>
            <div class="modal-actions">
                <slot name="modalAction"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "Modal",
    computed: {
        ...mapState(['modalMessage', "showModal"])
    }
};
</script>

<style scoped>
.modal-wrapper {
    background: rgba(255,255,255, 0.8);
    text-align: left;
    max-width: 500px;
    margin: 16px auto;
    position: relative;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px;
    box-shadow: 0px 8px 32px -12px rgba(0,0,0, 0.4);
}

.modal-wrapper p {
    font-size: 1.2em;
    color: #333;
}

.modal-actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8px;
}
</style>