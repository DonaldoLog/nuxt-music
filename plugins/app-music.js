import axios from 'axios'
import configService from './config'
console.log(configService.apiUrl)

const appMusicService = axios.create({
  baseURL: configService.apiUrl
})

export default appMusicService
