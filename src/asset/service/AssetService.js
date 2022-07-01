import axios from 'axios';


class AssetService{
    addAsset(asset) {
        return axios.post('http://localhost:4472/createAsset', asset);
    }
    viewAsset() {
        return axios.get('http://localhost:4472/viewAsset');
    }
    deleteAsset(id){
        return axios.delete(`http://localhost:4472/deleteAsset/${id}`);
    }
    findAssetById(id){
        return axios.get(`http://localhost:4472/searchAsset/${id}`);
    }
    updateAsset(asset){
        return axios.put('http://localhost:4472/updateAsset', asset);
    }
}
export default AssetService;