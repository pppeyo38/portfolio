import styled from '@emotion/styled'
import Image from 'next/image'
import { use100vh } from 'react-div-100vh'
import { Button } from '@/components/atoms/button/Button'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'
import { Title } from '@/components/atoms/text/Title'
import { TextArea } from '@/components/molecules/TextArea'
import { WorkPageProps } from '@/types/workTypes'

export const WorkContentLayout = (props: WorkPageProps) => {
  const { image, bgColor, title, abstract, url, content } = props
  const height = use100vh()

  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={bgColor}>
        <_SectionLeftInner>
          <_SectionLeftHead>
            <Title color="#FFF">{title}</Title>
            <Text color="#FFF">{abstract}</Text>
          </_SectionLeftHead>
          <_MockUpBlock>
            {image.map((item, index) => (
              <_MockFigure key={index}>
                <Image src={item.path} alt={item.alt} layout="fill" />
              </_MockFigure>
            ))}
          </_MockUpBlock>
        </_SectionLeftInner>
      </_SectionLeft>
      <_SectionRight>
        <TextArea heading="Period">{content.period}</TextArea>
        <TextArea heading="Concept">{content.concept}</TextArea>
        <TextArea heading="Technology">{content.technology}</TextArea>
        <_LinkArea>
          <Heading>Repository</Heading>
          {content.repository.map((item, index) => (
            <_Link key={index} href={item}>
              {item}
            </_Link>
          ))}
        </_LinkArea>
      </_SectionRight>
      {url && (
        <_GoLiveBtn>
          <Button
            strokeColor="#FFF"
            fillColor={bgColor}
            onClick={() => location.assign(url)}
          >
            Go Live
          </Button>
        </_GoLiveBtn>
      )}
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => `calc(${props.height}) `};

  @media screen and (max-width: 959px) {
    flex-direction: column;
  }
`

const _SectionLeft = styled.section<{ bgColor: string }>`
  display: grid;
  width: 50%;
  margin-top: 4.5rem;
  background: ${(props) => props.bgColor};
  overflow-y: hidden;
  place-content: center;

  @media screen and (max-width: 959px) {
    width: 100%;
    height: 50%;
  }
`

const _SectionLeftInner = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 959px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 519px) {
    width: 330px;
    flex-direction: column;
  }
`

const _SectionLeftHead = styled.div`
  @media screen and (max-width: 959px) {
    width: 320px;
  }
`

const _MockUpBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  gap: 32px;

  @media screen and (max-width: 959px) {
    justify-content: center;
    gap: 32px;
  }
`

const _MockFigure = styled.figure`
  position: relative;
  width: 24vh;
  aspect-ratio: 1 / 2.026;

  @media screen and (min-width: 1200px) {
    width: 32vh;
  }

  @media screen and (max-width: 959px) {
    width: 14vh;
  }
`

const _SectionRight = styled.section`
  display: flex;
  width: calc(50% - 8%);
  flex-direction: column;
  padding: 4%;
  margin-top: 4.5rem;
  gap: 42px;
  overflow-y: scroll;
  @media screen and (max-width: 959px) {
    width: calc(100% - 8%);
    height: 50%;
    margin-top: 0;
    gap: 24px;
  }
`

const _LinkArea = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`

const _Link = styled.a`
  display: block;
  color: #4d79ff;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  @media screen and (max-width: 959px) {
    font-size: 12px;
  }
`

const _GoLiveBtn = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition: 0.8s;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 1519px) {
    right: 20px;
    bottom: 20px;
    font-size: 12px;
  }
`