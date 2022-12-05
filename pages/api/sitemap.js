import { createGzip } from 'zlib'

import { SitemapStream } from 'sitemap'

import { asyncMap } from '@/common/utils/array/asyncMap'
import { DOMAIN } from '@/config/common'

const STATIC_URLS = [
  { url: '', changefreq: 'weekly', priority: 0.9 },
  { url: '/pages/legal', changefreq: 'monthly', priority: 0.3 },
]

const LOCALES = ['']

const sitemapApi = async (req, res) => {
  // ensure response is XML & gzip encoded
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Content-Encoding', 'gzip')

  // makes necessary API calls to get all the dynamic
  // urls from user-gen content
  // const userGenPageUrls = await getUserGeneratedPages()

  const sitemapStream = new SitemapStream({ hostname: `https://${DOMAIN}` })
  const pipeline = sitemapStream.pipe(createGzip())

  let LOCALIZED_ALL_URLS = []

  await asyncMap(LOCALES, async (locale) => {
    await asyncMap(STATIC_URLS, async (stream) => {
      let localizedStream = { ...stream }
      localizedStream.url = `${locale}${localizedStream.url}`
      LOCALIZED_ALL_URLS.push(localizedStream)
    })
  })

  // write static pages to sitemap
  LOCALIZED_ALL_URLS.forEach((stream) => {
    sitemapStream.write(stream)
  })

  sitemapStream.end()

  // stream write the response
  pipeline.pipe(res).on('error', (err) => {
    throw err
  })
}

export default sitemapApi
