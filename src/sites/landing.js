import React from "react"
import styled from "styled-components";
import { make_id } from "../utils";

import logo from "../img/logo.png";
import logobanner from "../img/logo_banner.png";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #212121;
`

const LogoWrapper = styled.div`
    width: 25rem;
    height: 15rem;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -130%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.div`
    height: 35%;
    width: 80%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`
const LogoBanner = styled.div`
    height: 45%;
    width: 100%;
    background-image: url(${logobanner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    

`

const RoomGenerator = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -30%);
    
    height: 15rem;
    width: 30rem;

    background-color: #02C0F2;
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const RoomGeneratorTitle = styled.span`
    font-size: 1.3rem;
    
`

const RoomGeneratorLink = styled.div`
    
    background-color: #212121;

    height: 3vh;
    width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

`

const IdText = styled.span`
    height: 3vh;
    width: 75%;
`

const Button = styled.button`
    height: 3vh;
    width: 25%;

    border: 0;


`


class Landing extends React.Component {
    
    
    get_room() {
    
        const id = make_id(12);
        console.log({id})
        alert("Room Session ID is: " + id);
    }
        
        
    render() {
        return (
            <Wrapper>
                <LogoWrapper>
                    <Logo />
                    <LogoBanner />
                </LogoWrapper>
                <RoomGenerator>
                    <RoomGeneratorTitle>Generate Room Link</RoomGeneratorTitle>
                    <RoomGeneratorLink>
                        <IdText>{this.get_room.id}</IdText>
                        <Button onClick={this.get_room}>Get Room</Button>
                    </RoomGeneratorLink>

                </RoomGenerator>
            </Wrapper>
        )
    }
}

export default Landing;