import GhostContentAPI from '@tryghost/content-api'

const config = {
  url: process.env.GHOST_API_ENDPOINT,
  key: process.env.GHOST_CONTENT_KEY,
  version: 'v5.0',
}

export const api = new GhostContentAPI(config)
