import { useRouter } from 'next/router'
import React from 'react'

import { DOMAIN } from '@/config/common'
import { Button } from '@aba-financial-group/whitegold/uni/Button'
import { Spacing } from '@aba-financial-group/whitegold/uni/Spacing'

import * as S from './index.styles'

function Page404() {
  const { push } = useRouter()
  const { t } = { t: (v) => v }

  const onPrimaryButtonClick = () => push('/')

  return (
    <S.GradientWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Image src="https://s3-cdn.abainvest.id/images/404.svg" />
          <Spacing size={300} />
          <S.Title>{t('Halaman ini tidak tersedia')}</S.Title>
          <Spacing size={200} />
          <S.Subtitle>{t('Hingga ke ujung benua kami cari, tapi info nya tetap tiada. Mari kembali ke halaman utama.')}</S.Subtitle>
          <Spacing size={400} />
          <Button
            variant="brandcta"
            size="medium"
            onClick={onPrimaryButtonClick}
          >
            {t('Ke halaman utama')}
          </Button>
          <Spacing size={300} />
          <S.Domain>{DOMAIN}</S.Domain>
        </S.Container>
      </S.Wrapper>
    </S.GradientWrapper>
  )
}

export default Page404
