import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@aba-financial-group/whitegold/uni/DropdownMenu'
import { Spacing } from '@aba-financial-group/whitegold/uni/Spacing'
import { Text } from '@aba-financial-group/whitegold/uni/Typography'

import * as S from './index.styles'

const LANGCONFIG = {
  i18n: {
    id: {
      name: 'Indonesia',
      flagUrl: `/images/flags/id.svg`,
      alt: 'Indonesia Flag',
      title: 'Bahasa Indonesia',
    },
    en: {
      name: 'English',
      flagUrl: `/images/flags/en.svg`,
      alt: 'English Flag',
      title: 'English',
    },
    default: {
      name: 'English',
      flagUrl: `/images/flags/en.svg`,
      alt: 'English Flag',
      title: 'English',
    },
  },
}

function LanguageSelector() {
  const { locale, asPath } = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <S.LanguageButton>
          <S.FlagImg
            src={LANGCONFIG.i18n[locale].flagUrl}
            alt={LANGCONFIG.i18n[locale].alt}
            title={LANGCONFIG.i18n[locale].title}
          />
          <S.DropdownIcon />
        </S.LanguageButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <S.MenuContainer>
          <Link
            href={asPath}
            locale={'id'}
            onClick={(e) => e.stopPropagation()}
          >
            <S.LanguageButton onClick={(e) => e.stopPropagation()}>
              <S.FlagImg
                src={LANGCONFIG.i18n['id'].flagUrl}
                alt={LANGCONFIG.i18n['id'].alt}
                title={LANGCONFIG.i18n['id'].title}
              />
              <Spacing size={200} />
              <Text size={300} css={{ fontWeight: 500 }}>
                {LANGCONFIG.i18n['id'].name}
              </Text>
            </S.LanguageButton>
          </Link>
          <Link href={asPath} locale={'en'}>
            <S.LanguageButton onClick={(e) => e.stopPropagation()}>
              <S.FlagImg
                src={LANGCONFIG.i18n['en'].flagUrl}
                alt={LANGCONFIG.i18n['en'].alt}
                title={LANGCONFIG.i18n['en'].title}
              />
              <Spacing size={200} />
              <Text size={300} css={{ fontWeight: 500 }}>
                {LANGCONFIG.i18n['en'].name}
              </Text>
            </S.LanguageButton>
          </Link>
        </S.MenuContainer>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
