'use client'

import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './registry'
import { theme } from '../theme'
import * as S from './styles'
import { Noto_Sans } from 'next/font/google'

const NotoSans = Noto_Sans({
  weight: ['300', '400', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  style: 'normal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={NotoSans.className}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <S.Body>{children}</S.Body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  )
}
