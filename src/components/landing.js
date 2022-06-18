import React from "react";
import styled from "styled-components";
import { make_id } from "../utils";

import logo from "../img/logo.png";
import logobanner from "../img/logo_banner.png";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleconfig from "../components/ts-particles.json";

import { generatePath, useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #212121;
`

const LogoWrapper = styled.div`
    height: 30%;
    width: 30%;

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
     text-align: center;
    `

const RoomGenerator = styled.div`
    position: absolute;
    top: 65%;
    left: 50%;

    transform: translate(-50%, -50%);
    
    height: 30%;
    width: 30%;

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

    height: 1.4rem;
    width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    
    `

const IdText = styled.span`
    height: 1.4rem;
    width: 75%;
    color: white;
    text-align: center;
`

const ButtonWrapper = styled.div`
    height: 1.4rem;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: grey;
    
    border-radius: 3px;
`
const Button = styled.button`
    height: 1.4rem;
    width: 100%;
    border: 0;
    transition: 0.2s;
    border-radius: 3px;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }


`


function Landing() {

    const own_sessionId = make_id(11);    
    const navigate = useNavigate()
    
    
    function Enter_room(sessionId) {

        const room_url = "http://base url/room/" + sessionId
        
        navigate(generatePath("/rooms/:roomId", {roomId: sessionId}))

        if (sessionId === own_sessionId) {
            navigator.clipboard.writeText(room_url)
            }
        }
    


    const particlesInit = async (main) => {
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {};
    
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
                    <IdText>{own_sessionId}</IdText>
                    <ButtonWrapper>
                    <Button onClick={() => Enter_room(own_sessionId)}>Create Room</Button>
                    </ButtonWrapper>
                </RoomGeneratorLink>
            </RoomGenerator>
        </Wrapper>
        )
    };


export default Landing;