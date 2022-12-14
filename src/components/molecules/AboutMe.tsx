import styled from '@emotion/styled'
import Image from 'next/image'
import { Text } from '@/components/atoms/text/Text'

import profileIcon from 'public/profile.png'

export const AboutMe = () => {
  return (
    <_AboutMeSection>
      <_Figure>
        <Image src={profileIcon} alt="プロフィール" layout="fill" />
      </_Figure>
      <_AboutBlock>
        <_Romaji>Isono Tamaki</_Romaji>
        <_Name>磯野 圭希</_Name>
        <Text>
          名古屋市立大学芸術工学部情報環境デザイン学科3年生。
          <br />
          業務支援サービスの開発・提供を行うIT企業でWebエンジニアとして長期インターンシップをしています。
          <br />
          エンジニアリングとデザインが好きです。
          <br />
          デザインエンジニアの働き方に興味があります。
        </Text>
      </_AboutBlock>
    </_AboutMeSection>
  )
}

const _AboutMeSection = styled.section`
  display: flex;
  margin-top: 60px;

  @media screen and (max-width: 959px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 519px) {
    margin-top: 40px;
  }
`

const _Figure = styled.figure`
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 80px;
  border-radius: 120px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 10%),
    0px 10px 10px -5px rgba(0, 0, 0, 4%);

  @media screen and (max-width: 519px) {
    width: 200px;
    height: 200px;
  }
`

const _AboutBlock = styled.div`
  max-width: 460px;
  padding: 10px 0;
  * + * {
    margin-top: 8px;
  }

  @media screen and (max-width: 959px) {
    max-width: 420px;
    margin-top: 20px;
  }

  @media screen and (max-width: 519px) {
    max-width: 315px;
    margin-top: 20px;
  }
`

const _Romaji = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 16px;

  @media screen and (max-width: 519px) {
    font-size: 8px;
  }
`

const _Name = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWt.Medium};
  letter-spacing: 0.1rem;

  @media screen and (max-width: 519px) {
    font-size: 16px;
  }
`
