import React from 'react'
import { useParams } from 'react-router-dom'
import { db, user } from "../user"
import styled from "styled-components"

import Header from "./header.js"


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    
    background-color: #212121;  

`



function Room() {

    const { roomId } = useParams();

    console.log(db)
    
    user.create("leon", "test1234")
    console.log(user)

    db.get("test").put({"value4": 9})
    
    console.log(db.get("test"))
    

    

    return (
        <Wrapper>
            <Header />
                <h1>id: {roomId}</h1>
        </Wrapper>
        )
}

export default Room;