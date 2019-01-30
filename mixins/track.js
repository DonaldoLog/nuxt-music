const trackMixing = {
  methods: {
    selectTrack () {
      if (!this.track.preview_url) { return }
      console.log('selectTrack')
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixing
