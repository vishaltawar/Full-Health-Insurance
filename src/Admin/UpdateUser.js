import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import User from "../authentication/model/User";
import UserSerivce from "../authentication/service/UserService";
import Footer from "./Footer";
import Header from "./Header";

function UpdateUser() {
    const [state, setState] = useState({ user: new User() });
    let service = new UserSerivce();
    const { user_Id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.findUserById(user_Id).then((result) => {
            setState({ user: result.data })
            console.log(result);
        }).catch((error) => {
            alert(error);
        })
    }, []);
    return (
        <div>
          
        {sessionStorage.getItem('role')==='Administrator'  ?(
            
        <form>
            <Header></Header>
            <div style={{ backgroundImage: "url(/mist.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
            <div>
                <label>User Id</label>
                <input className="form-control" type="text" id="user_Id" placeholder="Enter User Id"
                    value={state.user.user_Id}
                    readOnly={true}
                />
            </div>
            <div>
                <label>User Name</label>
                <input className="form-control" type="text" id="user_name" placeholder="Enter User Name"
                    value={state.user.user_name}
                    readOnly={true}
                />
            </div>
            <div>
                <label>User Password</label>
                <input className="form-control" type="text" id="user_password" placeholder="Enter User Password"
                    value={state.user.user_password}
                    readOnly={true}
                />
            </div>
            <div>
                <label>Role</label>
                <select className="form-control" type="text" id="role" placeholder="Enter Role"
                    value={state.user.role}
                    onChange={(e) => setState({ user: { ...state.user, role: e.target.value } })}
                >
                    <option value={'Administrator'}>Administrator</option>
                    <option value={'Warehouse manager'}>Warehouse Manager</option>
                    <option value={'user'} selected>User</option>
                </select>
            </div>
            <button className="btn btn-success mt-3" onClick={
                (e) => {
                    e.preventDefault();
                    service.updateUser(state.user.user_Id, state.user.role).then(() => {
                        alert('role is updated.');
                        setState({ user: new User() })
                        navigate('/Admin/userdata');
                    }).catch((error) => {
                        alert(error);
                    })
                }
            }>Update Role</button>
            <Link className="btn btn-danger mt-3 ml-3" to='/Admin/userdata'>Cancel</Link>
            </div>
            <Footer></Footer>
        </form>
        ) :  <p>unauthorized access. login as admin to view this page</p> }
        </div>
    );
}
export default UpdateUser;