import { useParams,useNavigate } from "react-router";
import React, { useEffect, useState } from 'react'
import Asset from "../model/Asset";
import AssetService from "../service/AssetService";
import Header from "../../Warehouse Manager/Header";
import Footer from "../../Warehouse Manager/Footer";


 function WareHouseSearchedAsset() {
 const [state,setState]=useState({asset:new Asset()})
 const {id}=useParams();
 let service=new AssetService();
 const navigate=useNavigate();
 useEffect(() => {
     
    
     console.log(id)
    service.findAssetById(id).then((result)=>{
        setState({asset:result.data})
    }).catch((error)=>{alert(error)})},[])

    return (
        <div>
        {sessionStorage.getItem('role')==='Warehouse manager'  ?(
            
        <div>
            <Header />
        <div>
        <div style={{ backgroundImage: "url(/searchA.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
    <h1  align='center'><span className="badge badge-success">Asset</span></h1> 
    <form >
        <table   align='center'>
            <tbody>
            <tr>
                <td>
                    

                        <label className="text-light bg-dark">UserName:</label>
                 </td>   
                 <td>   
                 <input  type="text" placeholder="Enter UserName"
                        value={state.asset.user_name}
                         onChange={(e) => setState({ asset: { ...state.asset, user_name: e.target.value } })}>
                     </input>
                   
                </td>
             </tr>
             <tr>
                <td> 
                   
                           <label className="text-light bg-dark">Asset model:</label>
                 </td>  
                 <td>        
                 <input  type="text" placeholder="Enter Assetmodel"
                          value={state.asset.asset_model}
                         readOnly={true} >
                     </input>
                   
                 </td>
            </tr>
       
            <tr>
                <td> 
                      
                        <label className="text-light bg-dark">Asset manufacturer:</label>
                </td>  
             <td>     
              <input  type="text" placeholder="Enter Assetmanufacturer"
                    value={state.asset.asset_Manufacturer}
                    readOnly={true} >
                </input>
                
                </td>
            </tr> 
       
            <tr>
                <td> 
        
                <label className="text-light bg-dark">Asset type:</label>
            </td>  
             <td> 

             <input  type="text" placeholder="Enter Asset type"
                value={state.asset.asset_type}
                readOnly={true} >
                </input>
             </td>
            </tr> 
          
            <tr>
            <td> 
            <label className="text-light bg-dark">Asset Status:</label>
        </td>  
        <td> 
        <input  type="text" placeholder="Enter Asset Status"
                value={state.asset.asset_status}
                readOnly={true} >
               </input>
         
         </td>
         </tr> 
          
        <tr>
         <td> 
        
              <label className="text-light bg-dark">Asset movement Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.asset_Movement_date}
                readOnly={true} >
               </input>
        </td>
        </tr> 
          
        <tr>
        <td> 
              <label className="text-light bg-dark">Expected delivery Date:</label>
        </td>  
         <td>
         <input  type="date" placeholder=" dd-mm-yyyy"
                value={state.asset.expected_delivery_date}
                readOnly={true} >
              </input>
          </td>
          </tr> 
          
         <tr>
        <td> 
              <label className="text-light bg-dark">Asset Source Location:</label>
        </td>  
         <td>
         <input  type="text-light bg-success" placeholder="Enter Asset Source Location"
                value={state.asset.asset_source_location}
                readOnly={true} >
                 </input>
        </td>
        </tr> 
          
        <tr>
        <td> 
       
             <label className="text-light bg-dark">Asset Destination Location:</label>
        </td>  
        <td>
        <input  type="text-success" placeholder="Enter Asset Destination Location"
                value={state.asset.  asset_destination_location}
                readOnly={true} >
            </input>
         </td>
         </tr>
         <tr>
         <td> 
               <label className="text-light bg-dark">Shipment</label>
        </td>  
        <td>
        <input  type="text-danger" placeholder="Enter ShipmentId"
                value={state.asset.shipment_id}
                readOnly={true}>
                     
               
               </input>
        </td>
        </tr>  
                    
        <tr>
        <td>
        <button className="btn btn-inline-warning" onClick={
                (event) => {
                    event.preventDefault();
                    // add method will return Promise
                   navigate('/Admin/SearchAsset')

                   }
            }>ok</button>
        </td>
        </tr> 
        </tbody>
        </table>
    </form>
  
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
export default WareHouseSearchedAsset;