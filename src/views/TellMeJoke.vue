<template>
    <div class="wrapper default">
        <Mood mood="joke">
            <div slot="content">
                <div class="farewell">
                    <h2 class="dark-theme">Here<br>it<br><span class="highlight-dark">comes!</span></h2>
                    <h2 class="light-theme">Hope<br>you<br><span class="highlight-light">enjoyed!</span></h2>
                </div>
                <Modal>
                        <RouterButton 
                            slot="modalAction" 
                            :route="buttonRoute" 
                            :text="buttonText" 
                            :hideButton="hideButton"
                            lightTheme
                            enableTransition 
                        />
                </Modal>
            </div>
        </Mood>
    </div>
</template>

<script>
import { mapState } from "vuex"
import { MOOD_JOKE_TEXT, MOOD_JOKE_NEXT_ROUTE } from "@/constants"
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";
import Modal from "@/components/Modal.vue";

export default {
    name: "TellMeJoke",
    components: {
        Mood,
        Modal,
        RouterButton
    },
    mounted() {
        this.getJoke();
        this.hideButton = true;
    },
    computed: {
        ...mapState(["showModal"])
    },
    methods: {
        /**
         * Call the API using the store Action
         */
        getJoke: function() {
            this.$store.dispatch("setModalMessage");
        },
        /**
         * Show the button after 5 seconds, when the transitions and complete and joke 
         * is already visible
         */
        setButtonTimer: function() {

            setTimeout(() => {
                this.hideButton = false;
            }, 5000);
        }
    },
    data() {
        return {
            buttonText: MOOD_JOKE_TEXT,
            buttonRoute: MOOD_JOKE_NEXT_ROUTE,
            hideButton: this.setButtonTimer()
        }
    },
    beforeDestroy() {
        /**
         * Should toggleModal back to original state when the component is destroyed  
         */
        this.$store.dispatch("toggleModal", false);
    }
};
</script>

<style scoped>
    .wrapper.default:before {
        background-image: url('~@/assets/happiness.png');
        background-size: auto 100%;
        animation: fadeIn 5s ease-in alternate;
    }

    .farewell {
        margin-top: 100px;
    }

    .farewell h2 {
        display: inline-block;
    }

    h2 {
        font-size: 2.7em;
    }

    h2.dark-theme {
        opacity: 0;
        animation: fadeOut 2s ease-in alternate;
    }

    h2.light-theme {
        text-align: right;
        color: #666;
        opacity: 1;
        animation: fadeIn 3s ease-in alternate;
    }
</style>
