import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';


export const SearchContainer = styled.div`
    height: 397px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dadbf1;
`;

export const SearchWrapper = styled.div`
    text-align: center;
`;

export const SearchH1 = styled.h1`
    font-size: 4.9rem;
    font-weight: normal;
    margin: -20px 0 30px 0;
    letter-spacing: -3px;
`;

export const SearchInput = styled.input`
    height: 65px;
    width: 720px;
    padding: 0px 0px 0px 15px;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    box-shadow: -3px 10px 5px #d0d1e6;
    border: 1px solid black;
    transition: all 0.15s ease-in-out;

    &:focus {
        border: 1px solid #4C5FD5;
        transition: all 0.15s ease-in-out;
    }

    &:hover {
        border: 1px solid #4C5FD5;
        transition: all 0.15s ease-in-out;
    }
    
    &::placeholder {
        color: #999b9c;
    }



    //attempting to make the arrow turn #4C5FD5 when hovering over the input

    //https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered#:~:text=If%20you%20have%20two%20elements,within%20the%20same%20larger%20element.

    //https://www.smashingmagazine.com/2020/07/styled-components-react/#:~:text=You%20can%20use%20standard%20CSS,prefixes%20should%20they%20be%20needed.&text=Styled%20components%20are%20independent%20of,library%20handles%20that%20for%20you.
    ~.ArrowRight {
        color: #4C5FD5;
        transition: all 0.15s ease-in-out;
    }
`;

export const ArrowRight = styled(BsArrowRight)`
    font-size: 25px;
    position: absolute;
    left: 67%;
    bottom: 62.2%;
    transition: all 0.15s ease-in-out;

    &:focus {
        color: #4C5FD5;
        transition: all 0.15s ease-in-out;
    }

    &:hover {
        color: #4C5FD5;
        transition: all 0.15s ease-in-out;
    }
`;