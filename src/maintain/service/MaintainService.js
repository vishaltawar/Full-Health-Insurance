import axios from "axios";
class MaintainService{
    viewMaintainRecords(){
        return axios.get("http://localhost:4472/viewMaintain");

    }
}
export default MaintainService;