'use client'

import styled from 'styled-components'
import type {} from 'next/navigation'

export default function ReadDoujinPage({ params }: ServerComponentsProps) {
  return <Test>reading doujin {params.id}</Test>
}

const Test = styled.div`
  ${(props) => console.log(props.theme)}
  color: red;
`
