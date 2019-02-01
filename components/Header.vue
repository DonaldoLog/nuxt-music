<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong App music
          .dropdown.is-hoverable
            .dropdown-trigger
              button.button(aria-haspopup="true", aria-controls="dropdown-menu2")
                span Lang
            .dropdown-menu(id="dropdown-menu2", role="menu")
              .dropdown-content
                a.dropdown-item(@click="selectLang('en')") en
                a.dropdown-item(@click="selectLang('es')") es
          .navbar-end.navbar-menu
            router-link.navbar-item(to="/") {{ $t('search') }}
            router-link.navbar-item(to="about") {{ $t('about') }}
    .hero-body
      .container.has-text-centered
        h1.title App Music
        h2.subtitle Music vuenisima
        ap-player
</template>
<script>
import ApPlayer from '~/components/Player.vue'
export default {
  components: {
    ApPlayer
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
