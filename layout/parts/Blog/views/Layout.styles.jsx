import { styled } from '@aba-financial-group/whitegold/core/stitches.config'

export const Main = styled('main', {
  paddingTop: 'calc($sizes$LARGE_HEADER_H)',
  margin: '0 auto',
  width: 'min(100%, $PADDED_3_W)',
  background: '$panel',
  zIndex: '$100',

  '@bp2': {
    minHeight: 'calc($LARGE_HEADER_H)',
  },
})
