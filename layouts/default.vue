<template lang="pug">
  div
    ap-header
    nuxt
    ap-footer
</template>

<script>
import ApHeader from '~/components/Header.vue'
import ApFooter from '~/components/Footer.vue'

export default {
  components: {
    ApHeader,
    ApFooter
  }
}
</script>
