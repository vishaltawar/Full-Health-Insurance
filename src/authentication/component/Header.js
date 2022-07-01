import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../layout/component/images/QB1.png';
import '../../layout/component/HeaderStyle.css';

function Header() {
    return (
        <div>
            <div className='row'>
             <nav className="navbar navbar-wrapper navbar-expand-lg navbar-light bg-light">
      <img
              src={Logo}
              height='90'
              alt='Logo'
            />
  <a className="navbar-brand" href="#">QuickBee</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      
      
      
      
      
    </ul>
    
  </div>
</nav>
</div>
        </div>
    )
}
export default Header;