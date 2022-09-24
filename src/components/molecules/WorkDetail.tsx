import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Heading } from '@/components/atoms/text/Heading'
import { TextJp } from '@/components/atoms/text/TextJp'

type Props = {
  theme: string
  children: ReactNode
}

export const WorkDetail = ({ theme, children }: Props) => {
  return (
    <_WorkDetail>
      <Heading fontSize="38px">{theme}</Heading>
      <TextJp fontSize="16px">{children}</TextJp>
    </_WorkDetail>
  )
}

const _WorkDetail = styled.div`
  padding: 24px 0;
  h1 {
    margin-bottom: 24px;
    text-align: start;
  }
`