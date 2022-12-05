import { invert } from 'lodash'
import { MdMenu } from 'react-icons-all-files/md/MdMenu'

import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { FlexRow } from '@aba-financial-group/whitegold/uni/Flex'

export const Wrapper = styled('header', {
  position: 'fixed',
  zIndex: '$200',
  height: '$LARGE_HEADER_H',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  transition: '$fluid',
  padding: '0 $200',

  '@bp2': {
    height: '$COMPACT_HEADER_H_m',
    background: 'rgba(255, 255, 255, 0.8) none repeat scroll 0% 0%',
    backdropFilter: 'blur(8px)',
  },
})

export const Container = styled(FlexRow, {
  margin: '0 auto',
  width: '100%',
  maxWidth: 'calc($PADDED_1_W + 150px)',
  height: '$HEADER_HEIGHT',
  alignItems: 'center',

  '@bpg2': {
    transition: '$fluid',
    padding: '0 $300',
  },
  '@bp2': {
    padding: '0 $200',
    height: '$HEADER_HEIGHT_mobile',
  },
})

export const Logo = styled('img', {
  height: '40px',
  cursor: 'pointer',

  variants: {
    invertColor: {
      true: {
        '@bpg2': { filter: 'invert(1)' },
      },
    },
  },
})

export const MenuContainer = styled(FlexRow, {
  ai: 'center',
  jc: 'center',
  boxShadow: '$1',
  br: '$200',
  background: 'white',
})

export const RightContainer = styled(FlexRow, {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const MenuIcon = styled(MdMenu, {
  fontSize: '$700',
  color: '$hiContrast',
  cursor: 'pointer',
})
