import Footer from '@/layout/components/Footer'

import * as S from './Layout.styles'
import Header from './components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <S.Main id="__main">{children}</S.Main>
      <Footer />
    </>
  )
}

export default Layout
