import GithubBlogLogo from '../../assets/blog-logo.svg'
import LeftEffect from '../../assets/left-effect.svg'
import RightEffect from '../../assets/right-effect.svg'

import { HeaderContainer, HeaderContent, LinesImageEffect } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LinesImageEffect
        src={LeftEffect}
        alt="Lines on the horizontal as image effect"
        variant="left"
      />
      <HeaderContent>
        <img
          src={GithubBlogLogo}
          alt="An angle bracket and an underline and the company name"
        />
      </HeaderContent>
      <LinesImageEffect
        src={RightEffect}
        alt="Lines on the horizontal as image effect"
        variant="right"
      />
    </HeaderContainer>
  )
}

export default Header
