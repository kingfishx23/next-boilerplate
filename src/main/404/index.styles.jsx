import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { FlexCol, FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

export const wrapperStyles = {
  zIndex: '$100',
  width: '100%',
  padding: '$600 0',

  '@bp3': {
    padding: '$600 $600',
  },

  '@bp2': {
    // background: 'transparent',
    padding: '$600 $500',
  },

  '@bp1': {
    padding: '$500 $400',
  },
}

export const containerStyles = {
  margin: '0 auto',
  width: '100%',
  height: '100%',
  maxWidth: 'calc($PADDED_2_W)',
  jc: 'center',
  ai: 'center',
}

export const GradientWrapper = styled(FlexCol, {
  // padding: '$400 0',
  // background: `
  // radial-gradient(ellipse 500px 350px at 40% 52.5%,#cbb06a 0,transparent 100%),
  // radial-gradient(ellipse 500px 350px at 60% 52.5%,#4affba 0,transparent 100%)`,
  // '@bpg3': {
  //   background: `
  // radial-gradient(ellipse 420px 320px at 40% 52.5%,#cbb06a 0,transparent 100%),
  // radial-gradient(ellipse 420px 320px at 60% 52.5%,#4affba 0,transparent 100%)`,
  // },
})

export const Wrapper = styled(FlexCol, {
  minHeight: '100vh',
  background: `url(https://s3-cdn.abainvest.id/images/bigpicture_lines.svg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  ai: 'center',
  jc: 'center',
  ...wrapperStyles,
})

export const Container = styled(FlexCol, {
  background: '$panel',
  borderRadius: '$200',
  ...containerStyles,
  boxShadow: '$2',
  height: 'auto',
  minHeight: '500px',
  padding: '$400',
})

export const Image = styled('img', {
  width: '200px',
})

export const Title = styled(Text, {
  fontSize: '$600',
  fontWeight: 700,
  color: '$hiContrast',
  textAlign: 'center',
  lineHeight: '1.4',

  '@bp2': {
    fontSize: '$500',
  },
})

export const Subtitle = styled(Text, {
  fontSize: '$400',
  fontWeight: 400,
  color: '$hiContrast',
  textAlign: 'center',
  lineHeight: 1.4,

  '@bp2': {
    fontSize: '$300',
  },
})

export const Domain = styled(Text, {
  fontSize: '$400',
  fontWeight: 400,
  color: '$gray10',
  textAlign: 'center',
  lineHeight: 1.4,

  '@bp2': {
    fontSize: '$200',
  },
})
