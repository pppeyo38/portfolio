import styled from '@emotion/styled'
import Link from 'next/link'
import GithubIcon from 'public/icons/github.svg'
import TwitterIcon from 'public/icons/twitter.svg'

type Props = {
  pathname: string
}

export const NavList = ({ pathname }: Props) => {
  const navList = [
    { nav: 'Top', path: '/' },
    { nav: 'Works', path: '/works' },
    { nav: 'Profile', path: '/profile' },
  ]

  return (
    <_NavList>
      {navList.map((item, index) => (
        <_NavListItem key={index} isActive={item.path === pathname}>
          <Link href={`${item.path}`}>
            <_Item>{item.nav}</_Item>
          </Link>
        </_NavListItem>
      ))}
      <_SnsIconWrap>
        <_A href="https://github.com/pppeyo38">
          <GithubIcon width={24} height={24} />
        </_A>
        <_A href="https://twitter.com/ume2_uguisu">
          <TwitterIcon width={24} height={24} />
        </_A>
      </_SnsIconWrap>
    </_NavList>
  )
}

const _NavList = styled.ul`
  display: flex;
  margin: 0 18px;
  gap: 24px;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`

const _NavListItem = styled.li<{ isActive: boolean }>`
  position: relative;
  &:before {
    ${(props) =>
      props.isActive &&
      `
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 16px;
        height: 4px;
        border-radius: 200px;
        background: linear-gradient(135deg, #ab79e8 0%, #555ee7 100%);
    `}
  }
`

const _Item = styled.a`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.Medium};
`

const _SnsIconWrap = styled.li`
  display: flex;
  gap: 16px;
`

const _A = styled.a`
  cursor: pointer;
`
