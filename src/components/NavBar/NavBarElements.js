import styled from 'styled-components';
// import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    background-color: #000;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    z-index: 1;
    margin: 0px 95px;
`;

export const NavBarLeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavBarLogo = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const NavBarLogoLink = styled.img`
    height: 88px;
`;

export const NavBarHelpCenter = styled.a`
    color: white;
    margin-left: 10px;
    border-left: 2px solid white;
    padding-left: 10px;
    font-size: 25px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const NavBarHelpCenterLink = styled.p`
    
`;

export const NavBarUnorderedList = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const NavBarButton = styled.button`
    padding: 10px;
    margin: 0 10px;
    border: none;
    background: none;
`;

export const NavBarButtonLink = styled(LinkRouter)`
    border-radius: 12px;
    border: 1px solid black;
    padding: 10px 18px;
    text-decoration: none;
    color: black;
    background-color: ${({colorBlue}) => (colorBlue ? "#4C5FD5" : 'gray')};
    color: white;
    font-size: 25px;

    &:hover {

    }
`
