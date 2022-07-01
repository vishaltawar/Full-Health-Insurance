import Footer from "../../Admin/Footer";
import Header from "../../Admin/Header";
import Asset from '../model/Asset';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import AssetService from "../service/AssetService";

 function UpdateAsset() {
    const [state, setState] =useState({asset: new Asset()});

    let service = new AssetService();
    const { asset_id } =useParams();
    const [error, setError] = useState({
        
        user_nameError: "",
        asset_ManufacturerError: "",
        asset_modelError: "",
        asset_typeError: "",
        asset_statusError: "",
        asset_Movement_dateError: "",
        expected_delivery_dateError: "",
        asset_source_locationError: "",
        asset_destination_locationError: "",
        shipment_idError: "",
        
      })
    

   useEffect(() => {
       service.findAssetById(asset_id).then((result)=>{
           setState({asset:result.data})
       }).catch((error)=>{alert(JSON.stringify(error))})},[])
       
    return (
        
        <div>
             {sessionStorage.getItem('role')==='Administrator'  ?(
                 <div>
            <Header></Header>
        <div style={{ backgroundImage: "url(/addAsset.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
     <h1  align='center'><span style={{color:'maroon'}} >Asset</span></h1> 
    <form >
        <table   align='center'>
            <tbody>
            <tr>
                <td>
                  <label style={{color:'black'}}  >User Name:</label>
                 </td>   
                 <td>   
                 <input  type="text" placeholder="Enter UserName"
                        value={state.asset.user_name}
                         onChange={(e) => setState({ asset: { ...state.asset, user_name: e.target.value } })}>
                     </input>
                     <span className="alert-danger">{error.user_nameError}</span>
                </td>
            </tr>
            <tr>
                <td>
                <label style={{color:'black'}} >Asset manufacturer:</label>
                </td>  
             <td>     
              <input  type="text" placeholder="Enter Assetmanufacturer"
                    value={state.asset.asset_Manufacturer}
                     onChange={(e) => setState({ asset: { ...state.asset, asset_Manufacturer: e.target.value } })} >
                </input>
                <span className="alert-danger">{error.asset_ManufacturerError}</span>
                </td>
            </tr> 
            <tr>
                <td> 
                   
                    <label style={{color:'black'}} >Asset model:</label>
                 </td>  
                 <td>        
                 <input  type="text" placeholder="Enter Assetmodel"
                          value={state.asset.asset_model}
                         onChange={(e) => setState({ asset: { ...state.asset, asset_model: e.target.value } })} >
                     </input>
                     <span className="alert-danger">{error.asset_modelError}</span>
                 </td>
            </tr>
            <tr>
                <td> 
        
                <label style={{color:'black'}} >Asset type:</label>
            </td>  
             <td> 

             <input  type="text" placeholder="Enter Asset type"
                value={state.asset.asset_type}
                onChange={(e) => setState({ asset: { ...state.asset, asset_type: e.target.value } })}>
                </input>
                <span className="alert-danger">{error.asset_typeError}</span>
             </td>
            </tr> 
          
            <tr>
            <td> 
            <label style={{color:'black'}} >Asset Status:</label>
        </td>  
        <td> 
        <input  type="text" placeholder="Enter Asset Status"
                value={state.asset.asset_status}
                onChange={(e) => setState({ asset: { ...state.asset, asset_status : e.target.value } })}>
               </input>
               <span className="alert-danger">{error.asset_statusError}</span>
         </td>
         </tr> 
          
        <tr>
         <td> 
        
              <label style={{color:'black'}} >Asset movement Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.asset_Movement_date}
                onChange={(e) =>{ setState({ asset: { ...state.asset,   asset_Movement_date: e.target.value } })
                console.log(e.target.value)
                }}>
               </input>
               <span className="alert-danger">{error.asset_Movement_dateError}</span>
        </td>
        </tr> 
          
        <tr>
        <td> 
              <label style={{color:'black'}} >Expected delivery Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.expected_delivery_date}
                onChange={(e) => setState({ asset: { ...state.asset,  expected_delivery_date: e.target.value } })}>
              </input>
              <span className="alert-danger">{error.expected_delivery_dateError}</span>
          </td>
          </tr> 
          
         <tr>
        <td> 
              <label style={{color:'black'}} >Asset Source Location:</label>
        </td>  
         <td>
         <input  type="text-light bg-success" placeholder="Enter Asset Source Location"
                value={state.asset.asset_source_location}
                onChange={(e) => setState({ asset: { ...state.asset, asset_source_location: e.target.value } })}>
                 </input>
                 <span className="alert-danger">{error.asset_source_locationError}</span>
        </td>
        </tr> 
          
        <tr>
        <td> 
       
             <label style={{color:'black'}} >Asset Destination Location:</label>
        </td>  
        <td>
        <input  type="text-success" placeholder="Enter Asset Destination Location"
                value={state.asset.  asset_destination_location}
                onChange={(e) => setState({ asset: { ...state.asset, asset_destination_location: e.target.value } })}>
            </input>
            <span className="alert-danger">{error.asset_destination_locationError}</span>
         </td>
         </tr>
         <tr>
         <td> 
               <label style={{color:'black'}}  >Shipment</label>
        </td>  
        <td>
        <input  type="text-danger" placeholder="Enter ShipmentId"
                value={state.asset.shipment_id}
                onChange={(e) => setState({ asset: { ...state.asset, shipment_id: e.target.value } })}>
               </input>
        
               <span className="alert-danger">{error.shipment_idError}</span>
        </td>
        </tr>  
          
        <tr>
        <td>
        <button type="button" className="btn btn-success"   onClick={
                (event) => {
                    
                    event.preventDefault();
                    let isValid = true;
                    let err = {};
                   
                    if (!state.asset.user_name) {
                        isValid = false;
                        err.user_nameError = "*User Name is Required";                        
                    }
                   

                    if (!state.asset.asset_Manufacturer) {
                        isValid = false;
                        err.asset_ManufacturerError = "*Manufacturer is required";
                    }

                    if (!state.asset.asset_model) {
                        isValid = false;
                        err.asset_modelError = "*Please enter asset model";
                    
                    }
                   

                    if (!state.asset.asset_type) {
                        isValid = false;
                        err.asset_typeError = "*Enter asset type";
                    }
                   

                    if (!state.asset.asset_status) {
                        isValid = false;
                        err.asset_statusError = "*Enter asset status";
                    }

                    if (!state.asset.asset_Movement_date) {
                        isValid = false;
                        err.asset_Movement_dateError = "*Enter the asset movement date";
                    }


                    if (!state.asset.expected_delivery_date) {
                        isValid = false;
                        err.expected_delivery_dateError= "*Enter the expected delivery date";
                    }

                    if (!state.asset.asset_source_location) {
                        isValid = false;
                        err.asset_source_locationError = "*Enter the source location";
                    }
                   

                    
                    if (!state.asset.asset_destination_location) {
                        isValid = false;
                        err.asset_destination_locationError = "*Enter the destnation location";
                    }
                    if (!state.asset.shipment_id) {
                        isValid = false;
                        err.shipment_idError = "*Enter the shipment Id";
                    }


                    if (!isValid) {
                        setError(err);
                        return false;
                    }
                    const confirmBox = window.confirm(
                        "Are you sure you want to update?"
                      )
                      if (confirmBox === true) {                             
                    service.updateAsset(state.asset).then((result) => {
                        alert(result.data);
                        setState({ asset:new Asset() });
                    }).catch((error) => {
                        alert(error);
                    })

                   }
            }}>update</button>
        </td>
        </tr> 
        </tbody>
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
    )
}
export default UpdateAsset;
