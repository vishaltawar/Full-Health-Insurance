import { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from "react-router";
import User from "../model/User";
import img1 from "./img/loginIcon.png"
import img2 from "./img/Login-illustration.svg"
import './Login.css'
import UserSerivce from "../service/UserService";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
    const [user, setUser] = useState({ login: new User() });
    const navigate = useNavigate();
    let service = new UserSerivce();
    const [error, setError] = useState({
       

        user_IdError: "",
        user_passwordError: "",
        
      })
    return (
        <div >
            <Header />
             <Container className='mt-5'>
            <Row>
                <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                <img className='icon-img' src={img1} alt='loginImg' />
                <h1>Login Page</h1>
            <form>
                <div className="form-group">
                    <label>User Id</label>
                    <input className="form-control"  type="text" id="username" placeholder="Enter User Id"
                        value={user.login.user_Id}
                        onChange={(e) => setUser({ login: {...user.login, user_Id: e.target.value } })}
                    />
                    <span className="alert-danger">{error.user_IdError}</span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" id="password" placeholder="Enter Password"
                        value={user.login.user_password}
                        onChange={(e) => setUser({ login: {...user.login, user_password: e.target.value } })}
                    />
                     <span className="alert-danger">{error.user_passwordError}</span>
                </div>
                <div>
                    <button className="btn btn-outline-primary my-2" onClick={
                        (e) => {
                            e.preventDefault();
                            let isValid = true;
                            let err = {};
                           
                   
                    if (!user.login.user_Id) {
                        isValid = false;
                        err.user_IdError = "*login user Id should be number";                        
                    }

                    if (!user.login.user_password) {
                        isValid = false;
                        err.user_passwordError = "*Password is Required!";
                    
                    }


                    if (!isValid) {
                        setError(err);
                        return false;
                    }
                            service.loginService(user.login).then((result) => {
                                //result = () => JSON.parse(JSON.stringify(result));
                                //console.log(result);
                                sessionStorage.setItem('user_Id', user.login.user_Id);
                                sessionStorage.setItem('role', result.data);
                                
                                if(result.data.match("Administrator")){
                                    alert("Logged in as Administrator")
                                    navigate("/Admin");
                                }
                                if(result.data.match("Warehouse manager")){
                                    alert("Logged in as Warehouse Manager")
                                    navigate("/WarehouseManager");
                                }
                                if(result.data.match("user")){
                                    alert("Logged in as user")
                                    navigate("/User")
                                }
                                
                            }).catch((error) => {
                                alert(error.message);
                            })
                        }
                    }>Login</button>
                </div>
                <div>
                    <p>If you are not a registered user, <Link to ={"/signup"}>Sign In</Link></p>
                    
                </div>
            </form>
            </Col>

<Col lg={7} md={6} sm={12} className='back-img-login'>
    <img className='img-back' src={img2} alt='backgroung' />
</Col>
</Row>
</Container>
<Footer />
        </div>
    );
}
export default Login;