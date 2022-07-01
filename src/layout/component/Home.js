import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Administrator from '../../Admin/Administrator';
import UpdateUser from '../../Admin/UpdateUser';
import UserData from '../../Admin/UserData';
import AddAsset from '../../asset/component/AddAsset';
import AdminViewAsset from '../../asset/component/AdminViewAsset';
import UpdateAsset from '../../asset/component/AdminUpdateAsset';
import ViewAsset from '../../asset/component/ViewAsset';
import WareHouseViewAsset from '../../asset/component/WareHouseViewAsset';
import Login from '../../authentication/component/Login';
import Logout from '../../authentication/component/Logout';
import SignUp from '../../authentication/component/SignUp';
import ViewMaintain from '../../maintain/component/ViewMaintain';
import Report from '../../report/Report';
import AddShipment from '../../shipment/component/AddShipment';
import AdminViewShipment from '../../shipment/component/AdminViewShipment';
import SearchedItem from '../../shipment/component/AdminSearchedItem';
import SearchShipment from '../../shipment/component/AdminSearchShipment';
import UpdateShipment from '../../shipment/component/AdminUpdateShipment';

import ViewShipment from '../../shipment/component/ViewShipment';
import WareHouseViewShipment from '../../shipment/component/WareHouseViewShipment';
import Userpage from '../../user/Userpage';
import WareHouseManager from '../../Warehouse Manager/WareHouseManager';
import Header from './Header';
import WareHouseUpdateAsset from '../../asset/component/WareHouseUpdateAsset';
import WarehouseUpdateShipment from '../../shipment/component/WarehouseUpdateShipment ';
import SearchAsset from '../../asset/component/AdminSearchAsset';
import SearchedAsset from '../../asset/component/AdminSearchedAsset';
import WareHouseSearchAsset from '../../asset/component/WareHouseSearchAsset';
import WareHouseSearchedAsset from '../../asset/component/WareHouseSearchedAsset';
import UserSearchAsset from '../../asset/component/SearchAsset';
import UserSearchedAsset from '../../asset/component/SearchedAsset';
import WareHouseSearchShipment from '../../shipment/component/WareHouseSearchShipment';
import WareHouseSearchedItem from '../../shipment/component/WareHouseSearchedItem';
import UserSearchShipment from '../../shipment/component/SearchShipment';
import UserSearchedItem from '../../shipment/component/SearchedItem';


 function Home() {
    return (
        <div className='container-fluid'>
          
          
          
          <Router>
          
          <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Admin/AddAsset" element={<AddAsset />} />
              <Route path="/Admin" element={<Administrator />} />
              <Route path="/User" element={<Userpage />} />
              <Route path="/User/viewAsset" element={<ViewAsset/>}/>
              <Route path="/User/viewShipment" element={<ViewShipment />} />
              <Route path="/User/SearchAsset" element={<UserSearchAsset/>} />
              <Route path="/User/SearchAsset/:id" element={<UserSearchedAsset/>} />
              <Route path="/User/SearchShipment" element={<UserSearchShipment/>} />
              <Route path="/User/SearchShipment/:id" element={<UserSearchedItem/>}/>
              <Route path="/Admin/AddShipment" element={<AddShipment/>}/>
              <Route path="/Admin/viewMaintain" element={<ViewMaintain/>}/>
              <Route path="/Admin/viewAsset" element={<AdminViewAsset/>}/>
              <Route path="/Admin/viewShipment" element={<AdminViewShipment/>}/>
              <Route path="/Admin/UpdateShipment/:shipment_id" element={<UpdateShipment/>}/>
              <Route path="/Admin/SearchShipment" element={<SearchShipment/>}/>
              <Route path="/Admin/SearchShipment/:id" element={<SearchedItem/>}/>
              <Route path="/Admin/UpdateAsset/:asset_id" element={<UpdateAsset/>}/>
              <Route path="/Admin/SearchAsset" element={<SearchAsset/>}/>
              <Route path="/Admin/SearchAsset/:id" element={<SearchedAsset/>}/>
              <Route path="/Admin/Report" element={<Report/>}/>
              <Route path="/Admin/userdata" element={<UserData />} />
              <Route path="/Admin/updateRole/:user_Id" element={<UpdateUser />} />
              <Route path="/WarehouseManager" element={<WareHouseManager />} />
              <Route path="/WarehouseManager/viewAsset" element={<WareHouseViewAsset />} />
              <Route path="/WarehouseManager/viewShipment" element={<WareHouseViewShipment />} />
              <Route path="/WarehouseManager/UpdateAsset/:asset_id" element={<WareHouseUpdateAsset />} />
              <Route path="/WarehouseManager/UpdateShipment/:shipment_id" element={<WarehouseUpdateShipment />} />
              <Route path="/WarehouseManager/SearchAsset" element={<WareHouseSearchAsset/>} />
              <Route path="/WarehouseManager/SearchAsset/:id" element={<WareHouseSearchedAsset/>} />
              <Route path="/WarehouseManager/SearchShipment" element={<WareHouseSearchShipment/>} />
              <Route path="/WarehouseManager/SearchShipment/:id" element={<WareHouseSearchedItem/>}/>
              </Routes>
              
          </Router>
          

        </div>
    )
}
export default  Home;