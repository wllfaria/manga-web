import styled from 'styled-components'
import Image from 'next/image'

export const Main = styled.main`
  padding: 24px;
`

export const DoujinCover = styled(Image)`
  width: 100%;
  border-radius: 16px;
  height: 66%;
`

export const DoujinTitle = styled.h1`
  font-weight: bold;
  font-size: 26px;
  line-height: 1.5;
  font-family: 'Noto Sans';
  color: ${(props) => props.theme.colors.dark.text.body};
  margin-top: 16px;
`

export const DoujinChipContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`

export const InfoTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
  margin-top: 16px;
  color: ${(props) => props.theme.colors.dark.text.body};
`
