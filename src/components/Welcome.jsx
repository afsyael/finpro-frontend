import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Snorlax from "../assets/snorlax.gif"

export default function Welcome({ currentUser }) {

    const [userName, setUserName] = useState("");
  useEffect(() => {
      async function getUsername() {
        setUserName(
            await JSON.parse(
              localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            ).username
          );
      }
      getUsername();
  }, []);



    return (
        <Container>
           <img src={Snorlax} alt="Snorlax" />
           <br />
           <h1>
               Welcome, <span>{userName}!</span>
           </h1>
           <br />
           <h3>Please select a chat to Start Message</h3>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 12rem;
  }
  span {
    color: #4e0eff;
  }
`;