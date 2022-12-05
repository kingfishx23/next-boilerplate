import { FaTicketAlt } from 'react-icons-all-files/fa/FaTicketAlt'
import { FaYoutube } from 'react-icons-all-files/fa/FaYoutube'
import { GiLifeBuoy } from 'react-icons-all-files/gi/GiLifeBuoy'
import { MdArrowDropDown } from 'react-icons-all-files/md/MdArrowDropDown'

import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { FlexCol, FlexRow } from '@aba-financial-group/whitegold/uni/Flex'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

export const Container = styled('div', {
  width: '100%',
  padding: '$300 0',
})

export const YoutubeIcon = styled(FaYoutube, {
  fontSize: '$400',
  color: '$hiContrast',
})

export const SupportIcon = styled(GiLifeBuoy, {
  fontSize: '$400',
  color: '$hiContrast',
})

export const TicketIcon = styled(FaTicketAlt, {
  fontSize: '$400',
  color: '$hiContrast',
})

export const TabWrapper = styled(FlexCol, {
  borderTop: '1px solid $colors$gray5',

  '&:last-child': {
    borderBottom: '1px solid $colors$gray5',
  },
})

export const TabContainer = styled(FlexRow, {
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  width: '100%',
  height: '50px',
  alignItems: 'center',
  color: '$hiContrast',
  padding: '0 0 0 $300',

  '&:hover': {
    background: '$whiteA6',
  },

  variant: {
    active: {
      1: { background: '$whiteA6' },
    },
  },
})

export const SelectedShape = styled('div', {
  position: 'absolute',
  top: '12%',
  left: '0',
  height: '74%',
  width: '4px',
  borderRadius: '0 $100 $100 0',
  background: '$brand4',
})

export const Icon = styled(FlexCol, {
  fontSize: '$600',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$400',
  margin: '0 $300 0 0',
})

export const Title = styled(Text, {
  fontSize: '$400',
  border: 'none',
  background: 'none',
  letterSpacing: '0px',
  margin: '-2px 0 0 0',
  color: '$hiContrast',
  fontWeight: '400',

  variants: {
    active: {
      1: {
        fw: 700,
      },
    },
  },
})

export const DropdownIcon = styled(MdArrowDropDown, {
  color: '$hiContrast',
  position: 'absolute',
  right: '$300',
  fontSize: '21px',

  variant: {
    active: {
      1: { transform: 'rotate(180deg)' },
    },
  },
})
