import { titleize } from '@/common/utils/string/titleize'
import { ExtLink, IntLink } from '@aba-financial-group/whitegold/uni/Link'
import { Spacing } from '@aba-financial-group/whitegold/uni/Spacing'

import * as S from './LinksMenu.styles'

function LinksMenu() {
  const { t } = { t: (v) => v }

  return (
    <S.LinksContainer>
      <S.LinkColumn>
        <ExtLink
          href="https://www.youtube.com/channel/UCr6NeUlk_5oMoUyu1a9YLbw"
          color="black"
          size={300}
        >
          {titleize(t('belajar trading'))}
        </ExtLink>
        <Spacing size={300} />
        <IntLink href="/blog" color="black" size={300}>
          {titleize(t('blog'))}
        </IntLink>
        <Spacing size={300} />
        <IntLink color="black" size={300} href="/pages/legal">
          {titleize(t('legal'))}
        </IntLink>
      </S.LinkColumn>
    </S.LinksContainer>
  )
}

export default LinksMenu
