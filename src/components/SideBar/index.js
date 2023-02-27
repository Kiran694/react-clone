import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiSaveAs} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/Theme'

import {
  SideBarContainer,
  SideBarItemContainer,
  StyledLink,
  SideBarBottomDetails,
  SideBarMainContainer,
  Contact,
  LogosContainer,
  Logo,
  Description,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLight} = value

      return (
        <SideBarMainContainer>
          <SideBarContainer isLight={isLight}>
            <SideBarItemContainer>
              <AiFillHome />
              <StyledLink to="/" isLight={isLight}>
                Home
              </StyledLink>
            </SideBarItemContainer>
            <SideBarItemContainer>
              <HiFire />
              <StyledLink to="/trending" isLight={isLight}>
                Trending
              </StyledLink>
            </SideBarItemContainer>
            <SideBarItemContainer>
              <SiYoutubegaming />
              <StyledLink to="/gaming" isLight={isLight}>
                Gaming
              </StyledLink>
            </SideBarItemContainer>
            <SideBarItemContainer>
              <HiSaveAs />
              <StyledLink to="/saved-videos" isLight={isLight}>
                Saved videos
              </StyledLink>
            </SideBarItemContainer>
          </SideBarContainer>
          <SideBarBottomDetails>
            <Contact>CONTACT US</Contact>
            <LogosContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogosContainer>
            <Description>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </SideBarBottomDetails>
        </SideBarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
