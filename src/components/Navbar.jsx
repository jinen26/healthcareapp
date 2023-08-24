import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Doctorslist from "./doctors/Doctorslist";

const Navbar = () => {
  const [login, setlogin] = useState(false);
  const [show, setshow] = useState(0);
  return (
    <div className="header">
      <h1>Healthcare app</h1>
      <nav>
        {login ? <Login setlogin={setlogin} /> : null}

        <Link to="/" className="normal">
          Home
        </Link>
        <Link to="/doctors" className="normal">
          Telemedicine
        </Link>
        <button className="buttonin" onClick={()=>setshow(1)}>
          <Link to="/doctors">Specialists</Link>
        </button>
        <button className="buttonout" onClick={() => setlogin(true)}>
          <Link to="/login">Login</Link>
        </button>
        {show===0?<Home />:show===1?<Doctorslist setshow={setshow}/>:null}

      </nav>
    </div>
  );
};

export default Navbar;
