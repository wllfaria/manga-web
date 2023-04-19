'use client'

import * as S from './styles'
import doujin from '../../../mocks/doujin.json'
import { Chip } from './components/Chip'

function getDoujin() {
  return doujin
}

export default function ReadDoujinPage({ params }) {
  const doujin = getDoujin()

  return (
    <S.Main>
      <section>
        <S.DoujinCover
          src={doujin.cover}
          alt={`Cover image from ${doujin.title}`}
          width={300}
          height={300}
        />
        <S.DoujinTitle>{doujin.title}</S.DoujinTitle>

        <S.InfoTitle>Tags: </S.InfoTitle>
        <S.DoujinChipContainer>
          {doujin.tags.map((tag) => (
            <Chip label={tag} key={tag} />
          ))}
        </S.DoujinChipContainer>

        <S.InfoTitle>Artist: </S.InfoTitle>
        <S.DoujinChipContainer>
          <Chip label={doujin.artist} />
        </S.DoujinChipContainer>

        <S.InfoTitle>Category</S.InfoTitle>
        <S.DoujinChipContainer>
          <Chip label={doujin.category} />
        </S.DoujinChipContainer>
      </section>

      <section></section>
    </S.Main>
  )
}
