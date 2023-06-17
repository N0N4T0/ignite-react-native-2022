import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logo.png';
import { HeaderProps } from "./types";

export function Header(props: HeaderProps) {
  const {showBackButton = false} = props

  return (
    <Container>
      { 
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      
      <Logo source={logoImg} />
    </Container>
  )
}