<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") Play
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(val, index) in track" :key="index")
                    li
                      strong {{ index }}:&nbsp;
                        span {{ val }}
                nav.level
                  .level-left
                    a.level-item wew ew
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '~/mixins/track'
import trackService from '~/plugins/track'

export default {
  mixins: [ trackMixin ],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  },
  created() {
    const id = this.$route.params.id
    // console.log(id,this.track.id)

    if (!this.track || !this.track.id || this.track.id !== id) {
      console.log('diferente')
      this.getTrackById({ id })
        .then(() => {
          // this.selectTrack(this.track.id)
        })
    }
  },
  mounted() {
      this.selectTrack(this.track.id)
  },
  asyncData ({ params }) {
    if (process.server) {
      return trackService.getById(params.id)
      .then(res => {
        return {track:res}
      })
    }
  },
  head() {
    return {
      title: this.track.name
    }
  }
}
</script>

<style lang="scss" scoped>
 .columns {
   margin: 20px;
 }

 .button-bar {
   margin-top: 20px;
 }
</style>
