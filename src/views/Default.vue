<template>
    <div class="wrapper default">
        <Mood mood="default">
            <div slot="content">
                <h3>Where<br>we came <br><span class="highlight-dark">From?</span></h3>
                <h2>Where<br>are we<br><span class="highlight-dark">Going?</span></h2>
                <RouterButton :route="buttonRoute" :text="buttonText" enableTransition />
            </div>
        </Mood>
    </div>
</template>

<script>
import { MOOD_DEFAULT_TEXT, MOOD_DEFAULT_NEXT_ROUTE } from "@/constants"
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";

export default {
    name: "Home",
    components: {
        Mood,
        RouterButton
    },
    data() {
        return {
            buttonText: MOOD_DEFAULT_TEXT,
            buttonRoute: MOOD_DEFAULT_NEXT_ROUTE,
        }
    }
};
</script>

<style scoped>
    .wrapper.default:before {
        background-image: url('~@/assets/galaxy.png');
        background-size: auto 50%;
        background-repeat: no-repeat;
        background-color: #111;
        background-position: right top; 
    }

    h2 {
        font-size: 3.5em;
        animation: fadeIn 2s ease-in alternate;
    }

    h3 {
        font-size: 2.5em;
        animation: fadeIn 1s ease-in alternate;
    }

    .highlight-dark {
        font-size: 1.5em;
    }
</style>
