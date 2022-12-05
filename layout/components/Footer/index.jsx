import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'

import { Spacing } from '@aba-financial-group/whitegold/uni/Spacing'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

import LinksMenu from './LinksMenu'
import * as S from './index.styles'

const Footer = () => {
  const { push } = useRouter()

  return (
    <S.Footer>
      <S.Container>
        <S.TopContainer>
          <S.Logo
            src={'https://s3-cdn.abainvest.id/images/logo-400w-black.png'}
            title="ABAInvest"
            alt="ABAInvest Logo"
            onClick={() => push('/')}
          />
        </S.TopContainer>
        <Spacing size={400} />
        <LinksMenu />
        <S.BottomContainer>
          <Text size={200}>Made with ❤️ in Indonesia</Text>
          <Spacing size={200} />
          <Text size={200}>
            Copyright © {dayjs().format('YYYY')} PT Digital Mulia Indonesia.
          </Text>
        </S.BottomContainer>
      </S.Container>
    </S.Footer>
  )
}

export default Footer
