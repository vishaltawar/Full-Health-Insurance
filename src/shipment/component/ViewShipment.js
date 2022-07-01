import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../user/Footer';
import Header from '../../user/Header';

import ShipmentService from "../service/ShipmentService";

function ViewShipment() {
    
    let service = new ShipmentService();
    const [state, setState] = useState({ shipments: [] });
   useEffect(()=>{
       service.viewShipment().then((result)=>setState({shipments:result.data})).catch((error)=>alert(JSON.stringify(error)))},)
    return (
        <div>
             {sessionStorage.getItem('role')==='user'?(
        <div>
            <Header />
            <div style={{ backgroundImage: "url(/mist.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
                <div className="mt-3">
                    {
                        state.shipments.length > 0 ?
                            (
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>shipment id</th>
                                            <th>shipment company_name</th>
                                            <th>shipment state</th>
                                            <th> shipment country</th>
                                            <th> subLocation</th>
                                           

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            state.shipments.map((as) =>
                                            ( // start
                                                <tr>
                                                     <td>{as.shipment_id}</td>
                                                  <td>{as.shipment_company_name}</td>                                                 
                                                    <td>{as.shipment_state}</td>
                                                    <td>{as.shipment_country}</td>
                                                    <td>{as.subLocation}</td>
                                                    
                                                </tr>
                                            ) // end
                                            ) // map closing
                                        }
                                    </tbody>
                                </table>
                            ) : <span className="alert alert-danger">No shipment Present</span>
                    }
                </div>
            </div>
            <Footer />
        </div>
         ) :  (
            <div>
                <Header />
        <div className="card text-white bg-danger mb-3" >
        <div className="card-header">Warning</div>
        <div className="card-body">
          <h5 className="card-title">Unauthorized Access</h5>
          <p className="card-text">You should be a user to access this page</p>
        </div>
        </div>
        <Footer />
        </div>) }
        </div>
    )
}
export default ViewShipment;