import styled from 'styled-components';
// import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    background-color: #000;
    height: 88px;
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
    margin: 0px 100px;
`;

export const NavBarLeftSide = styled.div`
    display: flex;
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
    height: 75px;
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

export const NavBarUnorderedList = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const NavBarButton = styled.button`
    padding: 3px 13px;
    border: none;
    background: none;
`;

export const NavBarButtonLink = styled(LinkRouter)`
    border-radius: 8px;
    margin: 0px -5px;
    padding: ${({largerPadding}) => (largerPadding ? "11px 33px" : "10px 20px")};
    /* padding: 10px 20px; */
    text-decoration: none;
    background-color: ${({colorBlue}) => (colorBlue ? "#4C5FD5" : '#191a19')};
    color: white;
    font-size: 25px;
    border: ${({whiteBorder}) => (whiteBorder ? "1px solid white" : "none")};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${({changeBgOnHover}) => (changeBgOnHover ? "white" : "none")};
        color: ${({changeTextColorOnHover}) => (changeTextColorOnHover ? "black" : "white")};
        transition: all 0.2s ease-in-out;
    }
`
