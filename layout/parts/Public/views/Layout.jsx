import { SidebarWrapper } from '@aba-financial-group/whitegold/multi/Sidebar'

import Footer from '../../../components/Footer'
import Header from '../views/components/Header'
import Sidebar from '../views/components/Sidebar'
import * as S from './Layout.styles'

function Layout({ children }) {
  return (
    <>
      <SidebarWrapper>
        <Header />
        <Sidebar />
        <S.SidebarPageWrapper>
          <S.Main>{children}</S.Main>
        </S.SidebarPageWrapper>
      </SidebarWrapper>
      <Footer />
    </>
  )
}

export default Layout
