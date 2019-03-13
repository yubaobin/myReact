import fetch from '@/utils/fetch'
import config from '@/config'

const baseUrl = config.baseUrl

export const aircleApi = (params = {}) => {
  return fetch(`${baseUrl}/api/aircle`, params)
}
