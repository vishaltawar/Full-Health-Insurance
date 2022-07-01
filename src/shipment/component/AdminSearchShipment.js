import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Admin/Footer';
import Header from '../../Admin/Header';

  function SearchShipment() {
    const [shipmentid,setShipmentid]= React.useState('');
 
  const handleShipmentid =(e)=>
  {
     e.preventDefault();
      setShipmentid(e.target.value);
  }
    return (
        <div>
            <Header />
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
                
                <td><Link className="btn btn-warning" to={{ pathname:`/Admin/SearchShipment/${shipmentid}`}}>Search</Link></td>
                </tr>
                </table>
                </form>
        </div>
        <Footer />
        </div>
    )
}
export default SearchShipment;