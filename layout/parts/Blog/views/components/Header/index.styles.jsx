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
  background: 'rgba(255, 255, 255, 0.8) none repeat scroll 0% 0%',
  backdropFilter: 'blur(8px)',
  transition: '$fluid',
  padding: '0 $200',

  variants: {
    shadowed: {
      true: {
        boxShadow: '$1',
      },
    },
    tinize: {
      true: {
        height: '60px',

        '@bp2': {
          height: '80px',
        },
      },
    },
  },
})

export const Container = styled(FlexRow, {
  margin: '0 auto',
  width: '100%',
  maxWidth: 'calc($PADDED_1_W + 150px)',
  height: '100%',
  alignItems: 'center',
  // borderBottom: '1px solid $colors$blackA6',

  '@bpg2': {
    transition: '$fluid',
    padding: '0 $300',
  },
  '@bp2': {
    padding: '0 $200',
  },
})

export const Logo = styled('img', {
  height: '40px',
  cursor: 'pointer',
})

export const FirstContainer = styled(FlexRow, {
  flex: 2,
  ai: 'center',

  '@bp2': {
    // ai: 'flex-start',
    jc: 'flex-start',
  },
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
