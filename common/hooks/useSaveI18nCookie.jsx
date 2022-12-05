import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { useMount } from 'react-use'

// Save locale to cookies
export const useSaveI18nCookie = () => {
  const router = useRouter()
  const cookies = parseCookies()

  useMount(() => {
    if (router.locale === 'en' && cookies.locale !== 'en') {
      setCookie(null, 'locale', 'en', { path: '/' })
    }
    if (router.locale === 'id' && cookies.locale !== 'id') {
      setCookie(null, 'locale', 'id', { path: '/' })
    }
  })

  return
}
