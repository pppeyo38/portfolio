import { Modal, ModalContent, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { use100vh } from 'react-div-100vh'

import { GithubIcon } from '../atoms/icons/GithubIcon'
import { HeaderIcon } from '../atoms/icons/HeaderIcon'
import { TwitterIcon } from '../atoms/icons/TwitterIcon'
import { Title } from '../atoms/text/Title'
import { HeaderTitle } from '@/components/molecules/link/HeaderTitle'

type Props = {
  isTItle: boolean
}

export const Header = ({ isTItle }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const height = use100vh()

  const toogleIcon = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <>
      <_Header>
        <_HeaderInner>
          <HeaderTitle isView={isTItle && !isOpen} fontSize="24px" />
          <HeaderIcon isOpen={isOpen} toggleIcon={toogleIcon} />
        </_HeaderInner>
      </_Header>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent alignItems="center">
          <_ContentInner height={height ? `${height}px` : '100vh'}>
            <HeaderTitle isView fontSize="66px" />
            <_ContentLists>
              <ul onClick={toogleIcon}>
                <_NavItem>
                  <Link href="/">Top</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="/works">Works</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="/profile">Profile</Link>
                </_NavItem>
                <_SnsItem>
                  <TwitterIcon />
                  <GithubIcon />
                </_SnsItem>
              </ul>
            </_ContentLists>
          </_ContentInner>
        </ModalContent>
      </Modal>
    </>
  )
}

const _Header = styled.header`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
`

const _HeaderInner = styled.div`
  display: flex;
  max-width: 900px;
  align-items: center;
  justify-content: space-between;
  margin: 14px auto;
`

const _ContentInner = styled.div<{ height: string }>`
  display: grid;
  max-width: 680px;
  height: ${(props) => props.height};
  align-items: center;
  grid-template-columns: 1fr 1fr;
`

const _ContentLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _NavItem = styled.li`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 38px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
`

const _SnsItem = styled.li`
  display: flex;
  gap: 20px;
`
