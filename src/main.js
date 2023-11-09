import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faUser, faBasketShopping, faHeart, faCircleInfo, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faBasketShopping, faHeart, faCircleInfo, faCircleXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
