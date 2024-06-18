import React from 'react';
import Home from './pages/home/Home';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import { Auth } from './pages/auth/Auth';
import { useUser } from '@clerk/clerk-react';

function App() {
  const navigate = useNavigate();
  
  const navStyling = {
    textDecoration: "none",
    marginRight: "35px",
    fontSize: "1.2vw",
    fontWeight: "600"
  };
  const buttonStyle = {
    padding: "5px 10px",
    fontSize: "1.2vw",
    borderRadius: "8px",
    cursor: "pointer",
    color: "purple",
    backgroundColor: "white",
    border: "transparent",
  };
  const handleClick = () => {
    navigate('/auth');
  };

  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
        <h1 className='header-Title' style={{ fontSize: "3rem", fontWeight: "800" }}>Spend Sense</h1>
        <div>
          <NavLink to="/" style={navStyling}>Home</NavLink>
          <button style={buttonStyle} onClick={handleClick}>Login</button>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
