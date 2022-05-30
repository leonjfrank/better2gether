import { styled } from "solid-styled-components";
import logo from "../img/logo.png"


const Wrapper = styled.div`
    width: 100vw;
    height: 10vh;
    padding: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

const Logo = styled.div`
    height: 100%;
    width: 10%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
`

const SearchBar = styled.input`
    padding: 0.4rem;
    height: 1rem;
    width: 50%;
    font-size: 1rem;

    position: relative;
    top: calc(50% - (0.5rem + 0.4rem));

  `
function Header() {
    

    return(
        <Wrapper>
            <Logo />
            <SearchBar />
        </Wrapper>
    );
}


export default Header;