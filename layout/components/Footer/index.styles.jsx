import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { FlexCol, FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

export const Footer = styled('footer', {
  marginTop: 'auto',
  background: 'linear-gradient($slate2 0%,$panel 30%)',
  height: 'auto',
  position: 'relative',
})

export const Container = styled(FlexCol, {
  margin: '0 auto',
  height: 'auto',
  maxWidth: 'calc($PADDED_1_W)',
  minHeight: '$FOOTER_HEIGHT',
  padding: '$700 $600',
  alignItems: 'flex-start',

  '@bp2': {
    flexDirection: 'column',
    padding: '$700 $500',
  },
})

export const TopContainer = styled(FlexRow, {
  width: '100%',
  ai: 'flex-start',

  '@bp2': {
    flexDirection: 'column',
  },
})

export const Logo = styled('img', {
  height: '35px',
  cursor: 'pointer',
  margin: '0 0 $2',
})

export const BottomContainer = styled(FlexCol, {
  ai: 'flex-start',
  width: '100%',
  paddingTop: '$500',
  marginTop: '$500',
  borderTop: '1px solid $colors$gray5',

  '@bp2': {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
})

export const Copyright = {
  Container: styled(FlexCol, {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 1,
  }),
}

export const Disclaimer = styled(Text, {
  fontSize: '$2',
  width: '100%',
  margin: '$4 0 0',
  color: '$gray10',
  lineHeight: '1.5',
})
