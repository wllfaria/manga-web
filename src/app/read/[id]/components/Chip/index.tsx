'use client'

import * as S from './styles'

interface ChipProps {
  label: string
}

export function Chip({ label }: ChipProps) {
  return <S.Chip>{label}</S.Chip>
}
