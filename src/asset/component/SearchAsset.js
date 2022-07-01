import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../user/Footer';
import Header from '../../user/Header';

  function UserSearchAsset() {
    const [assetid,setAssetid]= React.useState('');
 
  const handleAssetid =(e)=>
  {
     e.preventDefault();
      setAssetid(e.target.value);
  }
    return (
      <div>
             {sessionStorage.getItem('role')==='user'?(
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
                
                <td><Link className="btn btn-warning" to={{ pathname:`/User/SearchAsset/${assetid}`}}>Search</Link></td>
                </tr>
                </table>
                </form>
        </div>
        <Footer/>
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
export default UserSearchAsset;