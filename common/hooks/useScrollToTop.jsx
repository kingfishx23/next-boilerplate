import { useRouter } from 'next/router'
import { useEffect } from 'react'

// Save locale to cookies
export const useScrollToTop = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = async () => window.scrollTo(0, 0)

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return
}
