import { useRouter } from 'next/router'
import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import SmoothCollapse from 'react-smooth-collapse'

import { delQuery } from '@/common/utils/navigation/delQuery'
import { titleize } from '@/common/utils/string/titleize'
import { ROUTES } from '@/config/routes'
import { _layoutPublic } from '@/layout/parts/Public/middleware/slice'
import { ExtLink, IntLink } from '@aba-financial-group/whitegold/uni/Link'

import * as S from './Tabs.styles'

const getInitialExpand = (tabsList) =>
  Object.assign({}, ...tabsList.map(({ id }) => ({ [id]: false })))

const MenuTab = memo(
  ({ onClick, label, selector, href, Component, subMenus, expanded }) => {
    const dispatch = useDispatch()
    const { setIsSidebarOpen } = _layoutPublic
    const { asPath } = useRouter()
    const { t } = { t: (v) => v }
    const pathMatched = selector ? asPath?.match(delQuery(selector)) : false
    const active = pathMatched && !subMenus

    const onCardClick = () => {
      onClick()
      if (!subMenus) dispatch(setIsSidebarOpen(false))
    }

    const Tab = (
      <Component href={href} color="black">
        <S.TabContainer active={active ? 1 : 0} onClick={onCardClick}>
          {active && <S.SelectedShape />}
          <S.Title active={active || expanded ? 1 : 0}>
            {titleize(t(label))}
          </S.Title>
          {subMenus && <S.DropdownIcon active={expanded ? 1 : 0} />}
        </S.TabContainer>
      </Component>
    )

    return (
      <S.TabWrapper>
        <SmoothCollapse
          expanded={Boolean(expanded || pathMatched)}
          collapsedHeight="50px"
          heightTransition=".10s ease"
        >
          <div>{Tab}</div>
        </SmoothCollapse>
      </S.TabWrapper>
    )
  },
)

function Menus() {
  const { t } = { t: (v) => v }
  const { t: tauth } = { t: (v) => v }
  const tabsList = [
    // {
    //   id: 'signup',
    //   label: titleize(tauth('login')),
    //   Component: ExtLink,
    //   href: ROUTES.signup,
    // },
    // {
    //   id: 'login',
    //   label: titleize(tauth('register')),
    //   Component: ExtLink,
    //   href: ROUTES.login,
    // },
    // {
    //   id: 'faq',
    //   label: titleize(t('FAQ')),
    //   Component: IntLink,
    //   href: ROUTES.faq,
    //   selector: ROUTES.faq,
    // },
    {
      id: 'belajarTrading',
      label: titleize(t('belajar trading')),
      Component: ExtLink,
      href: ROUTES.belajarTrading,
      selector: ROUTES.belajarTrading,
    },
    {
      id: 'blog',
      label: titleize(t('blog')),
      Component: IntLink,
      href: ROUTES.blog,
      selector: ROUTES.blog,
    },
  ]

  const [expanded, setExpanded] = useState({
    ...getInitialExpand(tabsList),
  })

  function handleExpand(id) {
    setExpanded({
      ...getInitialExpand(tabsList),
      [id]: !expanded[id],
    })
  }

  return (
    <S.Container>
      {tabsList.map((item) => (
        <MenuTab
          {...item}
          key={item.label}
          expanded={expanded[item.id]}
          onClick={() => handleExpand(item.id)}
        />
      ))}
    </S.Container>
  )
}

export default Menus
