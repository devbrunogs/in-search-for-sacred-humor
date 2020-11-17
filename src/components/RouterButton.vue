<template>
    <router-link
        :to="route"
        :class="extraClasses"
    >
        {{ text }}
    </router-link>
</template>

<script>
export default {
    name: "RouterButton",
    props: {
        /**
         * Button Text
         */
        text: {
            type: String,
        },
        /**
         * The route to be used on click
         */
        route: {
            type: String,
        },
        /**
         * Prepare the button for use in light theme  
         */
        lightTheme: {
            type: Boolean
        },
        /**
         * Tell if the button should be hidden
         */
        hideButton: {
            type: Boolean
        },
        /**
         * Enable transition effect
         */
        enableTransition: {
            type: Boolean
        } 
    },
    methods: {
        /**
         * Build the button style based on the props received  
         */
        getExtraClasses: function() {
            let classes = "button";
            
            if (this.enableTransition && !this.hideButton)
                classes += " transition";
            if (this.lightTheme)
                classes += " light";
            if (this.hideButton)
                classes += " hide";

            return classes;
        }
    },
    data() {
        return {
            extraClasses: this.getExtraClasses()
        }
    },
    watch: {
        hideButton: function () {
            this.extraClasses = this.getExtraClasses();
        },
  }
}
</script>

<style scoped>
.button {
    position: relative;
    text-align: center;
    width: 320px;
    height: 50px;
    font-size: 1.1em;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    text-decoration: none;
    border: 2px solid lightskyblue;
    color: lightskyblue;
    display: block;
    padding: 12px;
    box-sizing: border-box;
    margin-top: 16px;
    transition: 200ms;
    opacity: 1;
}

.button.light {
    color: #1974D2;
    border-color: #1974D2;
}

.button:hover {
    opacity: 0.8;
    transition: 200ms;
}

.button.transition {
    animation: fadeIn 2s ease-in alternate;
}

.button.hide {
    opacity: 0;
}
</style>