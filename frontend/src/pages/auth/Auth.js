import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import GLOBE from 'vanta/src/vanta.globe';

export const Auth = () => {
  useEffect(()=>{
    GLOBE({
      el: '#vanta',
      color: '#5676e1',
      color2: '#81a8de',
      backgroundColor: '#c2d8ed'
    })
  },[])
  const containerStyle = {
    display: 'flex',
    gap: '5vw',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(30vh - 80px)',  // Adjust height to account for h1
    backgroundColor: 'transparent',
  };

  const buttonStyle = {
    width: '200px',
    padding: '10px',
    margin: '10px',
    fontSize: '1.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#222260',
    color: 'white',
    border: 'none',
    textAlign: 'center'
  };

  const headingStyle = {
    textAlign: 'center', 
    marginTop: '0',
    fontSize: '5rem',
    fontWeight: '500',
    fontFamily: '"Poppins", sans-serif',
  };

  return (
    <div id="vanta" style={{height: '100vh', width: '100%',paddingTop:'12vw'}}>
      <h1 style={headingStyle}>Finances Simplified. Your Money, Your Way.</h1>
      <div style={containerStyle}>
        <SignedOut>
          <SignUpButton mode='modal'>
            <button style={buttonStyle}>Sign Up</button>
          </SignUpButton>
          <SignInButton mode='modal'>
            <button style={buttonStyle}>Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Navigate to="/" />
        </SignedIn>
      </div>
    </div>
  );
};
