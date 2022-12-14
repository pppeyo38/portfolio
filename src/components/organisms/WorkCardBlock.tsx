import styled from '@emotion/styled'
import useMedia from 'use-media'
import { WorkCard } from '@/components/molecules/WorkCard'
import { mediaQueries } from '@/themes/mediaQueries'
import { WorksListProps } from '@/types/workTypes'

export const WorkCardBlock = ({ worksList }: WorksListProps) => {
  const isPc = useMedia(mediaQueries.pc)

  return (
    <_Wrapper>
      {worksList.map((item, index) => (
        <WorkCard key={index} {...item} />
      ))}
      {isPc && worksList.length % 3 === 1 && (
        <>
          <_Div />
          <_Div />
        </>
      )}
      {isPc && worksList.length % 3 === 2 && <_Div />}
    </_Wrapper>
  )
}

const _Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1050px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px auto;
  gap: 40px 0;

  @media screen and (max-width: 1050px) {
    max-width: 650px;
    justify-content: space-between;
    gap: 40px 20px;
  }

  @media screen and (max-width: 650px) {
    max-width: 300px;
    justify-content: center;
    margin: 40px auto;
  }
`

const _Div = styled.div`
  width: 300px;
  height: 256px;
`
