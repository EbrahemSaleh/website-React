import React , {useState} from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import {FaBars , FaTimes } from 'react-icons/fa';

function NavBar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () =>  setClick(!click);
 
    return ( 
      <>
        <nav className="navbar">
          <div className="container navbar-container" >
            <Link to="/" className="navbar-logo" >
              <MdFingerprint className="navbar-icon" />
              HOME
              </Link>
            
          <div className="menu-icon" onClick={handleClick} >
            {click ? <FaTimes/> : <FaBars/> }
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}  >
              <li className="nav-item" >
                <Link to="/" className="nav-link" >
                Home
                </Link>
              </li>

              <li className="nav-item" >
                <Link to="/services" className="nav-link" >
                Services
                </Link>
              </li>

              <li className="nav-item" >
                <Link to="/products" className="nav-link" >
                Products
                </Link>
              </li>

              <li className="nav-btn">

                {
                  button ? (
                    <Link to="/signup" className="btn-link">
                      <Button buttonStyle="btn--outline" >
                        SIGN UP
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize = "mobile" >
                      SIGN UP
                    </Button>
                  </Link>
                  )
                }
               
        </li>

            


            </ul>

            </div>
        </nav>
      </>
     );
  }

 
export default NavBar;