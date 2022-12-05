import { useRouter } from 'next/router'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useWindowScroll } from 'react-use'
import JoinWaitlist from '~>/Public/components/JoinWaitlist'

import { titleize } from '@/common/utils/string/titleize'
import { _layoutPublic } from '@/layout/parts/Public/middleware/slice'
import { MenuButton } from '@aba-financial-group/whitegold/multi/Sidebar'
import { Button } from '@aba-financial-group/whitegold/uni/Button'
import { FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { ExtLink, IntLink } from '@aba-financial-group/whitegold/uni/Link'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

import * as S from './index.styles'

const Tab = ({ children }) => {
  return (
    <FlexRow
      css={{
        height: '40px',
        px: '$400',
        cursor: 'pointer',
        ai: 'center',
        transition: '$fluid',
        borderRadius: '$100',
        '&:hover': { color: '$brand4', textDecoration: 'underline' },
      }}
    >
      <Text size={300} css={{ fw: 600, whiteSpace: 'nowrap' }}>
        {children}
      </Text>
    </FlexRow>
  )
}

const Header = memo(() => {
  const dispatch = useDispatch()
  const { t } = { t: (v) => v }
  const { t: tauth } = { t: (v) => v }
  const { push } = useRouter()
  const { y } = useWindowScroll()

  const onLogoClick = () => push('/')

  const onMenuClick = () => {
    dispatch(_layoutPublic.setIsSidebarOpen(true))
  }

  return (
    <S.Wrapper>
      <S.Container>
        <FlexRow css={{ flex: 1 }}>
          <S.Logo
            invertColor={y > 480}
            src={`https://s3-cdn.abainvest.id/images/logo-400w-black.png`}
            title="ABAInvest"
            alt="ABAInvest Logo"
            onClick={onLogoClick}
          />
        </FlexRow>
        <S.MenuContainer hidebp={2}>
          <ExtLink
            href="https://www.youtube.com/channel/UCr6NeUlk_5oMoUyu1a9YLbw"
            color="black"
            target="_blank"
          >
            <Tab>{titleize(t('youtube'))}</Tab>
          </ExtLink>
          <IntLink href="/blog" color="black">
            <Tab>{titleize(t('blog'))}</Tab>
          </IntLink>
        </S.MenuContainer>
        <S.RightContainer>
          {/* <LanguageSelector />
          <Spacing size={200} /> */}
          <FlexRow hidebpg={2}>
            <MenuButton onClick={onMenuClick} size={700} />
          </FlexRow>
          <FlexRow hidebp={2}>
            {/* <Button size="small" variant="brand" ghost>
              {titleize(tauth('login'))}
            </Button>
            <Spacing size={200} /> */}
            <JoinWaitlist>
              <Button size="small" variant="brandcta">
                {titleize(tauth('register'))}
              </Button>
            </JoinWaitlist>
          </FlexRow>
        </S.RightContainer>
      </S.Container>
    </S.Wrapper>
  )
})

export default Header
