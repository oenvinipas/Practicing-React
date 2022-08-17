import React from 'react';
import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLeftSide,
  NavBarLogo,
  NavBarLogoLink,
  NavBarHelpCenter,
  NavBarUnorderedList,
  NavBarButton,
  NavBarButtonLink
} from './NavBarElements';

import catCompanyLogo from '../../images/catCompanyLogo.png';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>

        <NavBarLeftSide>
          <NavBarLogo>
            <NavBarLogoLink src={ catCompanyLogo } alt="company logo" href=""></NavBarLogoLink>
          </NavBarLogo>
          <NavBarHelpCenter href="/">
            Help Center
          </NavBarHelpCenter>
        </NavBarLeftSide>
        
        <NavBarUnorderedList>
          <NavBarButton>
            <NavBarButtonLink
              to="/" 
              whiteBorder={true}
              colorBlue={false} 
              largerPadding={false}
              changeBgOnHover={false}
              changeTextColorOnHover={false}
              >
                Submit a request
            </NavBarButtonLink>
          </NavBarButton>
          <NavBarButton>

            {/* this button needs a different font from the one above */}
            <NavBarButtonLink 
              to="/" 
              whiteBorder={false}
              colorBlue={true} 
              largerPadding={true}
              changeBgOnHover={true}
              changeTextColorOnHover={true}
              >
                Sign in
              </NavBarButtonLink>
          </NavBarButton>
        </NavBarUnorderedList>

      </NavBarWrapper>
    </NavBarContainer>
  )
}

export default NavBar