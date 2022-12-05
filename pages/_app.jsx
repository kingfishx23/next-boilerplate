import '@aba-financial-group/whitegold/core/nprogress.css'
import '@aba-financial-group/whitegold/core/reset.css'
import '@aba-financial-group/whitegold/core/fonts.css'

import { DefaultSeo } from 'next-seo'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { useFbPageView } from '~+/Facebook/hooks/useFbPageView'
import { useRouterRedux } from '~+/RouteParams/hooks/useRouterRedux'
import Scripts from '~+/Scripts'

import { useSaveI18nCookie } from '@/common/hooks/useSaveI18nCookie'
import { useScrollToTop } from '@/common/hooks/useScrollToTop'
import { SEO } from '@/config/seo'
import { store, wrapper } from '@/redux/store'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  // Hooks
  useScrollToTop()
  useSaveI18nCookie()
  useFbPageView()
  useRouterRedux()

  // Layout logic
  let getLayout = Component.getLayout || ((page) => page)

  // Canonicalization
  const router = useRouter()
  const canonicalUrl = (
    process.env.NEXT_PUBLIC_PUBLICWEBSITE_URL +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  return (
    <Provider store={store}>
      <>
        <Scripts />
        <DefaultSeo {...SEO} canonical={canonicalUrl} />
        {getLayout(<Component {...pageProps} />)}
      </>
    </Provider>
  )
}

export default compose(wrapper.withRedux)(MyApp)
