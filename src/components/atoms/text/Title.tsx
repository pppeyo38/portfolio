import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  color?: string
  isBold?: boolean
  children: ReactNode
}

export const Title = ({ color, isBold, children }: Props) => {
  return (
    <_H1 color={color} isBold={isBold}>
      {children}
    </_H1>
  )
}

const _H1 = styled.h1<{ color?: string; isBold?: boolean }>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWt.ExtraBold};
  font-weight: ${(props) =>
    props.isBold ? props.theme.fontWt.Bold : props.theme.fontWt.ExtraBold};
  letter-spacing: 0.015em;

  @media screen and (max-width: 959px) {
    font-size: 32px;
  }

  @media screen and (max-width: 519px) {
    font-size: 32px;
  }
`
