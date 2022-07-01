import React from 'react'
import Footer from './Footer';
import Header from './Header';
import "./Style.css"
function WareHouseManager() {
    return (
        <div>
             {sessionStorage.getItem('role')==='Warehouse manager'  ?(
        <div>
            <Header />
            <div>
        <div className="jumbotron2 jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome WareHouse Manager</h1>
          <p className="lead"></p>
        </div>
      </div>
      </div>
            <Footer />
        </div>
         ) :  (
            <div>
                <Header/>
        <div className="card text-white bg-danger mb-3" >
        <div className="card-header">Warning</div>
        <div className="card-body">
          <h5 className="card-title">Unauthorized Access</h5>
          <p className="card-text">You should be a Warehouse manager to access this page</p>
        </div>
        </div>
        <Footer/>
        </div>) }
                
        </div>
    )
}
export default WareHouseManager;