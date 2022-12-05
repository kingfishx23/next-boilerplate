import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { FlexCol } from '@aba-financial-group/whitegold/uni/Flex'

export const Main = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
})

export const SidebarPageWrapper = styled(FlexCol, {
  width: '100%',
  marginTop: '$sizes$LARGE_HEADER_H',

  '@bp2': {
    marginTop: '$sizes$COMPACT_HEADER_H_m',
  },
})
