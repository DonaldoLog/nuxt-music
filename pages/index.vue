<template lang="pug">
  main
    transition(name="move")
      ap-notification(v-show="showNotification", :tipo="tipo.clase")
        p(slot="body", v-show="tipo.clase == 'is-danger'") Sin resultados
        p(slot="body", v-show="tipo.clase == 'is-success'") {{ searchMessage }}

    transition(name="move")
      ap-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.navbar
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones...",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      .container
        div(v-if="tracks.length > 0")
          .columns.is-multiline
            .column.is-one-quarter(v-for="(track, index) in tracks" :key="index")
              ap-track(
                v-blur="track.preview_url"
                :class="{ 'is-active': track.id === selectedTrack }"
                :track="track",
                @select="setSelectedTrack"
              )
        div(v-else)
          p Sin resultados
</template>

<script>
import trackService from '~/plugins/track'
import ApTrack from '~/components/Track.vue'

import ApNotification from '~/components/shared/Notification.vue'
import ApLoader from '~/components/shared/Loader.vue'

export default {
  name: 'app',
  components: {
    ApTrack, ApLoader, ApNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      tipo: {
        clase: '',
        texto: ''
      }
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = true
          if (res.tracks.total === 0) {
            this.tipo.clase = 'is-danger'
          } else {
            this.tipo.clase = 'is-success'
          }
          this.tracks = res.tracks.items
          this.isLoading = false
        })
      console.log(this.searchQuery)
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
