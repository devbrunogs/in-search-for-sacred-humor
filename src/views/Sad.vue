<template>
    <div class="wrapper default">
        <Mood mood="sad">
            <div slot="content">
                <h3>I <span class="highlight-dark">used</span> to be an<br>
                    <span class="highlight-dark">Adventurer</span>
                    <br>like you...
                    <br><span class="highlight-dark">But</span> then I<br>
                    <span class="highlight-dark">took</span> an<br>
                    <span class="highlight-dark">Arrow</span><br>on the knee</h3>
                <RouterButton :route="buttonRoute" :text="buttonText" enableTransition />
            </div>
        </Mood>
    </div>
</template>

<script>
import { MOOD_SAD_TEXT, MOOD_SAD_NEXT_ROUTE } from "@/constants"
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";

export default {
    name: "Sad",
    components: {
        Mood,
        RouterButton
    },
    data() {
        return {
            buttonText: MOOD_SAD_TEXT,
            buttonRoute: MOOD_SAD_NEXT_ROUTE,
        }
    }
};
</script>

<style scoped>
    .wrapper.default:before {
        background-image: url('~@/assets/rain.png');
        background-repeat: repeat;
        background-color: #222;
        background-position: right top;
    }

    h3 {
        font-size: 2.5em;
        animation: fadeIn 2s ease-in alternate;
    }

    .highlight-dark {
        font-size: 1.6em;
    }
</style>
