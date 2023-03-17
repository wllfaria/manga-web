'use client'

import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './registry'
import { theme } from './theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
