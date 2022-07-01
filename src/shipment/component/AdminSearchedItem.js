import { useParams,useNavigate } from "react-router";
import Shipment from '../model/Shipment'
import Header from "../../Admin/Header";
import Footer from "../../Admin/Footer";
import ShipmentService from '../service/ShipmentService';
import React, { useEffect, useState } from 'react'


 function SearchedItem() {
 const [state,setState]=useState({shipment:new Shipment()})
 const {id}=useParams();
 let service=new ShipmentService();
 const navigate=useNavigate();
 useEffect(() => {
     
    
     console.log(id)
    service.findShipmentById(id).then((result)=>{
        setState({shipment:result.data})
    }).catch((error)=>{alert(error)})},[])

    return (
       
             <div>
        <Header></Header>
            <div  style={{ backgroundImage: "url(/search.jpg)", backgroundPosition: 'center',
            backgroundSize: 'cover',
            height:'650px',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'transparent'}} >
             
            <h1 align='center'><span className="badge badge-success">Shipment</span></h1>
            <form>
                <table  align='center' >
                <tr>
                        <td>
               
                <label  className="text-light bg-dark">Shipment ID</label>
                </td>
                <td>
                    <input type="text-danger" placeholder="Enter Shipment Company Name"  
                        value={state.shipment.shipment_id}
                        readOnly={true}
                    ></input>
                </td>
                </tr>
                    <tr>
                        <td>
               
                <label  className="text-light bg-dark">Shipment Company Name</label>
                </td>
                <td>
                    <input type="text-danger" placeholder="Enter Shipment Company Name"  
                        value={state.shipment.shipment_company_name}
                        readOnly={true}
                    ></input>
                </td>
                </tr>
                <tr>
                    <td>
                <label  className="text-light bg-dark"> Shipment State</label> 
                </td>
                <td>
                    <input type="text-success" placeholder="Enter Shipment State"
                        value={state.shipment.shipment_state}
                        readOnly={true}
                    ></input>
                </td>
                </tr>
                <tr>
                    <td>
                <label  className="text-light bg-dark">Shipment Country</label>
                </td>
                <td>
                    <input type="text-primary" placeholder="Enter Shipment Country"
                        value={state.shipment.shipment_country}
                        readOnly={true}
                    ></input>
           </td>
           </tr>
               <tr>
                   <td>
                <label  className="text-light bg-dark">SubLocation</label>
                </td>
                <td>
                    <input type="text-primary" placeholder="Enter SubLocation"
                        value={state.shipment.subLocation}
                        readOnly={true}
                    ></input>
                    </td>
                    </tr>
               
               
               <tr>
               <td>
                    <button className="btn btn-inline-warning" onClick={
                        (event) => {
                            event.preventDefault();
                           navigate('/Admin/SearchShipment')
         
                           
                    }}>OK</button>
               </td>
               </tr>
                </table>
            </form>
           
        </div>
        <Footer></Footer>
       
        </div>
       
    )
}
export default SearchedItem;
