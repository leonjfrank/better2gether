import React from "react"
import styled from "styled-components";
import { make_id } from "../utils";

import logo from "../img/logo.png";
import logobanner from "../img/logo_banner.png";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleconfig from "./ts-particles.json";


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

    transform: translate(-50%, -140%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    color: white;
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

const Desc = styled.span`
    height: 20%;
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
    font-weight: 650;
    
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
    color: white;
`

const Button = styled.button`
    height: 3vh;
    width: 30%;

    border: 0;

    & hover: {
        background-color: green;
    }


`


class Landing extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            sessionId: make_id(12),
        };
    }
    
    
    
    
    render() {
        const particlesInit = async (main) => {
        
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(main);
          };
        
          const particlesLoaded = (container) => {
          };
        
        return (
            <Wrapper>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particleconfig}

                    />
                <LogoWrapper>
                    <Logo />
                    <LogoBanner />
                    <Desc>A decentralized application to watch videos with others with millisecond delay</Desc>
                </LogoWrapper>
                <RoomGenerator>
                    <RoomGeneratorTitle>Generate Room Link</RoomGeneratorTitle>
                    <RoomGeneratorLink>
                        <IdText>{this.state.sessionId}</IdText>
                        <Button onClick={this.copy_room_link}>Copy & Enter</Button>
                    </RoomGeneratorLink>
                </RoomGenerator>
            </Wrapper>
        )
    }
}

export default Landing;