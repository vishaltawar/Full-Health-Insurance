import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Admin/Footer';
import Header from '../../Admin/Header';

  function SearchAsset() {
    const [assetid,setAssetid]= React.useState('');
 
  const handleAssetid =(e)=>
  {
     e.preventDefault();
      setAssetid(e.target.value);
  }
    return (
        <div>
            <Header/>
             <div  style={{ backgroundImage: "url(/searchA.jpg)", backgroundPosition: 'center',
            backgroundSize: 'cover',
            height:'650px',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'transparent'}} >
             
            <h1 align='center'><span className="badge badge-success">Asset</span></h1>
            <form>
                <table  align='center' >
                <tr>
                        <td>
               
                <label  className="text-light bg-dark">Asset ID</label>
                </td>
                <td>
                   
                   <input type="text-danger" placeholder="Enter Asset id"  
                value={assetid}
                onChange={handleAssetid}
            ></input>
                    
                   
                </td>
                </tr>
                <tr>
                
                <td><Link className="btn btn-warning" to={{ pathname:`/Admin/SearchAsset/${assetid}`}}>Search</Link></td>
                </tr>
                </table>
                </form>
        </div>
        <Footer/>
        </div>
    )
}
export default SearchAsset;