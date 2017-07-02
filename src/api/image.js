import axios from '../utils/axiosService'

export const fetchImages = (count) => {
  return axios.get(`/api/images?count=${count}`)
}
