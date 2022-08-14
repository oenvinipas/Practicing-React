import React from 'react';
import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLeftSide,
  NavBarLogo,
  NavBarLogoLink,
  NavBarHelpCenter,
  NavBarHelpCenterLink,
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
          <NavBarHelpCenter href="">
            Help Center
            {/* <NavBarHelpCenterLink>Help Center</NavBarHelpCenterLink> */}
          </NavBarHelpCenter>
        </NavBarLeftSide>
        
        <NavBarUnorderedList>
          <NavBarButton>
            <NavBarButtonLink to="">Submit a Request</NavBarButtonLink>
          </NavBarButton>
          <NavBarButton>
            <NavBarButtonLink to="" colorBlue={true}>Sign Up</NavBarButtonLink>
          </NavBarButton>
        </NavBarUnorderedList>
      </NavBarWrapper>
    </NavBarContainer>
  )
}

export default NavBar