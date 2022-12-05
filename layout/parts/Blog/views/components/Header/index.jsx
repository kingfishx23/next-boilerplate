import Link from 'next/link'
import React, { memo } from 'react'
import { useWindowScroll } from 'react-use'

import { titleize } from '@/common/utils/string/titleize'
import { _layoutPublic } from '@/layout/parts/Public/middleware/slice'
import { LinkButton } from '@aba-financial-group/whitegold/uni/Button'
import { FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { IntLink } from '@aba-financial-group/whitegold/uni/Link'
import { Separator } from '@aba-financial-group/whitegold/uni/Separator'
import { Spacing } from '@aba-financial-group/whitegold/uni/Spacing'

import * as S from './index.styles'

const Header = memo(() => {
  const { t } = { t: (v) => v }
  const { y } = useWindowScroll()

  return (
    <S.Wrapper shadowed={y > 0} tinize={y >= 30}>
      <S.Container>
        <S.FirstContainer>
          <IntLink size={600} href="/blog" color="black">
            <FlexRow css={{ ai: 'center' }}>
              <img
                style={{ height: '35px' }}
                src="https://s3-cdn.abainvest.id/images/logo-400w-black.png"
              />
              <Spacing size={200} />
              Blog
            </FlexRow>
          </IntLink>
          <FlexRow>
            <Spacing size={500} />
            <Separator
              orientation="vertical"
              css={{ height: '60px', background: 'black', flexShrink: '0' }}
            />
            <Spacing size={500} />
          </FlexRow>  
          <FlexRow>
            <IntLink size={300} href="/" color="brand" css={{ fw: 900 }}>
              Home
            </IntLink>
          </FlexRow>
        </S.FirstContainer>
        <S.RightContainer hidebp={2}>
          <FlexRow hidebp={2}>
            <Link passHref href="/">
              <LinkButton size="medium" variant="brandcta">
                {titleize(t('Cek kompetisi trading'))}
              </LinkButton>
            </Link>
          </FlexRow>
        </S.RightContainer>
      </S.Container>
    </S.Wrapper>
  )
})

export default Header
