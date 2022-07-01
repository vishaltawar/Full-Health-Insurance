import axios from "axios";

class UserSerivce {
    loginService(user) {
        
        return axios.get(`http://localhost:4472/login/${user.user_Id}/${user.user_password}`);
    }
    SignUp(user){
        return axios.post(`http://localhost:4472/SignUp`,user)
    }
    viewUser(){
        return axios.get('http://localhost:4472/viewUser');
    }
    updateUser(userId,role){
        return axios.put(`http://localhost:4472/updateUser/${userId}/${role}`);
    }
    findUserById(userId){
        return axios.get(`http://localhost:4472/findUser/${userId}`)
    }
}
export default UserSerivce;