import Vue from 'vue'
import msToMm from '~/filters/ms-to-mm'
import blur from '~/directives/blur'
import mixins from '~/mixins/track'

Vue.use(msToMm)
Vue.use(blur)
Vue.use(mixins)
