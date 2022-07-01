import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../authentication/model/User";
import UserSerivce from "../authentication/service/UserService";
import Footer from "./Footer";
import Header from "./Header";

function UserData() {
    const navigate = useNavigate();
    let service = new UserSerivce();
    let user = new User();
    const [state, setState] = useState({ user: [] });
    
    useEffect(() => {
        if (sessionStorage.getItem('role') === 'Administrator') {
            service.viewUser().then((result) => {
                setState({ user: result.data });
                console.log(user);
            }).catch((error) => {
                alert(error);
            })
        } else {
            alert('Unauthorised Access to Page. login as admin');
            navigate('/login');
        }
    }, [])
    return (
        <div>
            <Header />
            <div style={{ backgroundImage: "url(/mist.jpg)", backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'650px',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'transparent'}}>
                <div className="mt-3">
                    {
                        state.user.length > 0 ?
                        (
                            
                                <table className="table table-bordered">
                                    
                                    <thead>
                                    <h2>User Data</h2>
                                        <tr>
                                            <th>User Id</th>
                                            <th>role</th>
                                           
                                            <th>User Name</th>
                                            <th>Update</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            state.user.map((u) =>
                                            ( 
                                                <tr>
                                                    <td>{u.user_Id}</td>
                                                    <td>{u.role}</td>
                                                   
                                                    <td>{u.user_name}</td>
                                                    <td><Link className="btn btn-success" to={{ pathname: `/Admin/updateRole/${u.user_Id}` }}>Update</Link></td>
                                                    
                                                </tr>
                                            ) 
                                            ) 
                                        }
                                    </tbody>
                                </table>
                           ) : <span className="alert alert-danger">No user data is Present</span>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default UserData;