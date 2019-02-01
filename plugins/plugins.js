import Vue from 'vue'
import msToMm from '~/filters/ms-to-mm'
import blur from '~/directives/blur'
import mixins from '~/mixins/track'
// import i18n from '~/plugins/i18n'

// Vue.use(i18n)
Vue.use(msToMm)
Vue.use(blur)
Vue.use(mixins)
