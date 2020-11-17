import Vue from 'vue'
import VueRouter from 'vue-router'
import { 
    MOOD_DEFAULT_NEXT_ROUTE,
    MOOD_SAD_NEXT_ROUTE,
    MOOD_JOKE_NEXT_ROUTE 
} from "@/constants"
import Default from '@/views/Default.vue'
import Sad from '@/views/Sad.vue'
import TellMeJoke from '@/views/TellMeJoke.vue'

Vue.use(VueRouter)

const routes = [
    {
        /**
         * Default route, neutral mood  
         */
        path: MOOD_JOKE_NEXT_ROUTE,
        name: 'Default',
        component: Default
    },
    {
        /**
         * Sad mood, second route
         */
        path: MOOD_DEFAULT_NEXT_ROUTE,
        name: 'Sad',
        component: Sad
    },
    {
        /**
         * Last route, where the joke is told
         */
        path: MOOD_SAD_NEXT_ROUTE,
        name: 'TellMeJoke',
        component: TellMeJoke
    }
]

const router = new VueRouter({
    routes
})

export default router
