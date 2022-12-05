import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  $layoutPublic,
  _layoutPublic,
} from '@/layout/parts/Public/middleware/slice'
import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { Sidebar as SidebarComponent } from '@aba-financial-group/whitegold/multi/Sidebar'
import { FlexCol, FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { ScrollArea } from '@aba-financial-group/whitegold/uni/ScrollArea'

import Tabs from './Tabs'

const Container = styled(FlexCol, {
  width: '$SIDEBAR_W',
  background: '',

  '@bpg2': {
    height: 'calc(100vh - $sizes$COMPACT_HEADER_H)',
    borderRight: '1px solid $colors$gray8',
    position: 'sticky',
    top: '$sizes$COMPACT_HEADER_H',
    marginTop: '$sizes$COMPACT_HEADER_H',
  },
  '@bp2': {
    height: '100%',
    position: 'relative',
  },
})

const Logo = styled('img', {
  height: '40px',
  cursor: 'pointer',
})

function Sidebar(props) {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector($layoutPublic)

  function closeSidebar() {
    dispatch(_layoutPublic.setIsSidebarOpen(false))
  }

  return (
    <SidebarComponent
      {...props}
      isOpen={isSidebarOpen}
      onClose={closeSidebar}
      side="right"
      showAtLargeBreakpoint={false}
    >
      <Container>
        <ScrollArea>
          <FlexRow
            css={{
              height: '$COMPACT_HEADER_H_m',
              ai: 'center',
              padding: '0 $300',
            }}
          >
            <Logo
              src={'https://s3-cdn.abainvest.id/images/logo-400w-black.png'}
              title="ABAInvest"
              alt="ABAInvest Logo"
            />
          </FlexRow>
          <Tabs />
        </ScrollArea>
      </Container>
    </SidebarComponent>
  )
}

export default Sidebar
