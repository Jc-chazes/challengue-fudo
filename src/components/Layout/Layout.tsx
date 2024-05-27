import * as React from 'react'
import { Header } from '../Header'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'

export const Container = styled.div`
  height: 100%;
`

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
