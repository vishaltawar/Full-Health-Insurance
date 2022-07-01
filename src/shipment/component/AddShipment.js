
import React,{  useState } from 'react'
import Shipment from "../model/Shipment";
import ShipmentService from "../service/ShipmentService";
import Header from "../../Admin/Header";
import Footer from "../../Admin/Footer";
function AddShipment(){
 
    const [state, setState] = React.useState({shipment: new Shipment()})
    let service=new ShipmentService();
    const [error, setError] = useState({
       
        
        shipment_company_nameError: "",
        shipment_stateError: "",
        shipment_countryError: "",
        subLocationError: "",
      })
    return(
        <div>
            
            {sessionStorage.getItem('role')==='Administrator'  ?(
<div>
<Header></Header>
    <div  style={{ backgroundImage: "url(/Shipment.jpg)", backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:'650px',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'transparent'}} >
     
    <h1 align='center'><span style={{color:'maroon'}} >Shipment</span></h1>
    <form>
        <table  align='center' >
            <tr>
                <td>
       
        <h6><label style={{color:'black'}}>Shipment Company Name</label></h6>
        </td>
        <td>
            <input type="text-danger" placeholder="Enter Shipment Company Name"  
                value={state.shipment.shipment_company_name}
                onChange={(e) => setState({ shipment: { ...state.shipment, shipment_company_name: e.target.value } })}
            ></input>
             <span className="alert-danger">{error.shipment_company_nameError}</span>
        </td>
        </tr>
        <tr>
            <td>
        <h6><label style={{color:'black'}} > Shipment State</label></h6>
        </td>
        <td>
            <input type="text-success" placeholder="Enter Shipment State"
                value={state.shipment.shipment_state}
                onChange={(e) => setState({ shipment: { ...state.shipment, shipment_state: e.target.value } })}
            ></input>
             <span className="alert-danger">{error.shipment_stateError}</span>
        </td>
        </tr>
        <tr>
            <td>
        <h6><label  style={{color:'black'}}>Shipment Country</label></h6>
        </td>
        <td>
            <input type="text-primary" placeholder="Enter Shipment Country"
                value={state.shipment.shipment_country}
                onChange={(e) => setState({ shipment: { ...state.shipment, shipment_country: e.target.value } })}
            ></input>
             <span className="alert-danger">{error.shipment_countryError}</span>
   </td>
   </tr>
       <tr>
           <td>
        <h6><label  style={{color:'black'}}>SubLocation</label></h6>
        </td>
        <td>
            <input type="text-primary" placeholder="Enter SubLocation"
                value={state.shipment.subLocation}
                onChange={(e) => setState({ shipment: { ...state.shipment, subLocation: e.target.value } })}
            ></input>
             <span className="alert-danger">{error.subLocationError}</span>
            </td>
            </tr>
       
       
       <tr>
       <td>
            <button type="button" className="btn btn-success"  onClick={
                (event) => {
                    event.preventDefault();
                    let isValid = true;
                    let err = {};
                   
                    if (!state.shipment.shipment_company_name) {
                        isValid = false;
                        err.shipment_company_nameError = "*Company name Required!";                        
                    }

                    if (!state.shipment.shipment_state) {
                        isValid = false;
                        err.shipment_stateError = "*Shipment state is Requied!";
                    
                    }
                   

                    if (!state.shipment.shipment_country) {
                        isValid = false;
                        err.shipment_countryError = "*Shipment Country is Required!";
                    }
                   

                    if (!state.shipment.subLocation) {
                        isValid = false;
                        err.subLocationError= "*Enter Shipment sublocation";
                    }
                   



                    if (!isValid) {
                        setError(err);
                        return false;
                    }
                    // add method will return Promise
                    service.addShipment(state.shipment).then((result) => {
                        alert(result.data);
                        setState({ shipment:new Shipment() });
                    }).catch((error) => {
                        alert(error);
                    })
 
                   }
            }>Register</button>
       </td>
       </tr>
        </table>
    </form>
   
</div>
<Footer></Footer>
</div>
) :  (
    <div>
        <Header/>
<div className="card text-white bg-danger mb-3" >
<div className="card-header">Warning</div>
<div className="card-body">
  <h5 className="card-title">Unauthorized Access</h5>
  <p className="card-text">You should be a Administrator to access this page</p>
</div>
</div>
<Footer/>
</div>) }
        
</div>
    );
}
export default AddShipment;