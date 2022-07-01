import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../layout/component/images/QB1.png';
import '../layout/component/HeaderStyle.css';

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
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Asset
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"/Admin/AddAsset"}>Asset movement Request</Link>
          <Link className="dropdown-item" to={"/Admin/viewAsset"}>Asset Records</Link>
          <Link className="dropdown-item" to={"/Admin/SearchAsset"}>Search Asset</Link>
          
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shipment
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"/Admin/AddShipment"}>Shipment Registration</Link>
          <Link className="dropdown-item" to={"/Admin/viewShipment"}>Shipment Records</Link>
          <Link className="dropdown-item" to={"/Admin/SearchShipment"}>Search Shipment</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Maintain
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to={"/Admin/viewMaintain"}>Maintenance Records</Link>
          <Link className="dropdown-item" to={"/Admin/userdata"}>User Records</Link>
          
        </div>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link"  to={"/Admin/Report"}>Report</Link>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <Link className="btn btn-outline-success my-2 my-sm-0 mx-2" to={`/logout`}>Logout</Link>
      
    </form>
  </div>
</nav>
</div>
        </div>
    )
}
export default Header;