import { MdArrowDropDown } from 'react-icons-all-files/md/MdArrowDropDown'

import { styled } from '@aba-financial-group/whitegold/core/stitches.config'
import { Button } from '@aba-financial-group/whitegold/uni/Button'
import { FlexCol } from '@aba-financial-group/whitegold/uni/Flex'

export const LanguageButton = styled(Button, {
  fontSize: '$400',
  height: '35px !important',
  background: 'transparent',
  boxShadow: 'none !important',
  borderRadius: '$100',
  jc: 'flex-start',
  padding: '0 $200',
  position: 'relative',

  '@hover': {
    '&:hover': {
      background: '$gray3',
    },
  },
})

export const FlagImg = styled('img', {
  width: '$400',
  boxShadow: '$1',
})

export const MenuContainer = styled(FlexCol, {
  margin: '-$300 0 0 0',
  width: '120px',
  background: '$panel',
  margin: '0 0 0',
  borderRadius: '$200',
  boxShadow: '$1',
})

export const DropdownIcon = styled(MdArrowDropDown, {
  color: '$hiContrast',
  fontSize: '21px',

  variant: {
    active: {
      1: { transform: 'rotate(180deg)' },
    },
  },
})
