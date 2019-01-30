import appMusicService from './app-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return appMusicService.get('/search', {
    params: { q, type }
  })
    .then((res) => res.data)
}

trackService.getById = function (id) {
  return appMusicService.get(`/tracks/${id}`)
    .then((res) => res.data)
}

export default trackService
