import trackService from '~/plugins/track'


const state = () => ({
  track: {}
})

const mutations = {
  setTrack (state, track) {
    state.track = track
  }
}

const actions = {
  getTrackById (context, payload) {
    return trackService.getById(payload.id)
      .then(res => {
        context.commit('setTrack', res)
        return res
      })
  },
  hola () {
    return 1
  }
}

const getters = {
  trackTitle (state) {
    if (!state.track.name) { return 0}
    return `${state.track.name} - ${state.track.artists[0].name}`
  }
}




export default {
  state,
  mutations,
  getters,
  actions
}
