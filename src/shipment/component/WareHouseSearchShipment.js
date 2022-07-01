import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Warehouse Manager/Footer';
import Header from '../../Warehouse Manager/Header';

  function WareHouseSearchShipment() {
    const [shipmentid,setShipmentid]= React.useState('');
 
  const handleShipmentid =(e)=>
  {
     e.preventDefault();
      setShipmentid(e.target.value);
  }
    return (
      <div>
             {sessionStorage.getItem('role')==='Warehouse manager'  ?(
        <div>
            <Header/>
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
                   
                   <input type="text-danger" placeholder="Enter Shipment Id"  
                value={shipmentid}
                onChange={handleShipmentid}
            ></input>
                    
                   
                </td>
                </tr>
                <tr>
                
                <td><Link className="btn btn-warning" to={{ pathname:`/WarehouseManager/SearchShipment/${shipmentid}`}}>Search</Link></td>
                </tr>
                </table>
                </form>
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
export default WareHouseSearchShipment;