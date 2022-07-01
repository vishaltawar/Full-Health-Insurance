import { useState } from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from "react-router";
import User from "../model/User";
import img1 from "./img/loginIcon.png"
import img2 from "./img/Login-illustration.svg"
import './Login.css'
import UserSerivce from "../service/UserService";
import Header from "./Header";
import Footer from "./Footer";

function SignUp() {
    const [user, setUser] = useState({ login: new User() });
    const navigate = useNavigate();
    let service = new UserSerivce();
    const [error, setError] = useState({
       
        
        user_IdError: "",
        user_passwordError: "",
        user_nameError:"",
    })
    return (
        <div >
            <Header />
             <Container className='mt-5'>
            <Row>
                <Col lg={5} md={6} sm={12} className=' firstcont text-center'>
                <img className='icon-img' src={img1} alt='loginImg' />
                <h1>Register Here</h1>
            <form>
            <div className="form-group">
                    <label>User Name</label>
                    <input className="form-control" type="text" id="username" placeholder="Enter User name"
                        value={user.login.user_name}
                        onChange={(e) => setUser({ login: {...user.login, user_name: e.target.value } })}
                    />
                    <span className="alert-danger">{error.user_nameError}</span>
                </div>
                 <div>
                <label>Role</label>
                    <input className="form-control" type="text" id="role" placeholder="Enter your designation"
                        value={user.login.role}
                        readOnly={true}
                    />
                </div> 
                <div className="form-group">
                    <label>User Id</label>
                    <input className="form-control" type="text" id="userId" placeholder="Enter User Id"
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
                    <button className="btn btn-outline-primary" onClick={
                        (e) => {
                            e.preventDefault();
                            let isValid = true;
                            let err = {};
                     if (!user.login.user_name) {
                                isValid = false;
                                err.user_nameError = "*User name Required!";
                            
                            }
        
                    if (!user.login.user_Id) {
                        isValid = false;
                        err.user_IdError = "*Login Id should be number";                        
                    }

                    if (!user.login.user_password) {
                        isValid = false;
                        err.user_passwordError = "*Password is Required!";
                    
                    }
                    

                    if (!isValid) {
                        setError(err);
                        return false;
                    }
                            service.SignUp(user.login).then((result) => {
                                alert(result.data);
                                navigate("/");
                           
                        }
                            )}}>SignUp</button>
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
export default SignUp;