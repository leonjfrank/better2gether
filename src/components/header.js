import styled from "styled-components";
import logo from "../img/logo.png"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"


const HeaderContainer = styled.div`
    width: 100%;
    height: 15%;
    
`

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


`

const LogoWithLink = styled(Link)`
    height: 100%;
    width: 10%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
`

const SearchBarWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 50%;

    background-color: green;

    display: flex;
    flex-direction: column;
    justify-content: end;
    
`

const SearchBar = styled.div`
    position: relative;
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const SearchInput = styled.input`
    height: 100%;
    width: 85%;
    padding: 0;
    border: 0;
    background-color: grey;
    padding: 10px 8px;
    font-weight: 400;
    outline: none;
    color: white;
    
    
    &:hover {

    }
    
    
    
    `

const SearchButton = styled.button`
    height: 100%;
    width: 15%;
    padding: 0;
    border: 0;
    background-color: #02C0F2;
    padding: 0.1rem 0.4rem 0.1rem 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    outline: none;

    &:hover {
        cursor: pointer;
    }
    
`

const SearchIcon = styled(AiOutlineSearch)`
    height: 70%;
    width: 70%;
`

function Header() {
    

    return(
        <HeaderContainer>
            <HeaderWrapper>

            <LogoWithLink to="/" />
            <SearchBarWrapper>

                <SearchBar>
                    <SearchInput />
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </SearchBar>
            </SearchBarWrapper>
            <LogoWithLink to="/" />
            </HeaderWrapper>
        </HeaderContainer>
    );
}


export default Header;