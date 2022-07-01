import axios from "axios";


class ShipmentService{
    addShipment( shipment){
        return axios.post('http://localhost:4472/createShipment',shipment)
    }
    viewShipment(){
        return axios.get('http://localhost:4472/viewShipment')
    }
    deleteShipment(id){
        return axios.delete(`http://localhost:4472/deleteShipment/${id}`)
    }
    findShipmentById(id){
      return axios.get(`http://localhost:4472/searchShipment/${id}`)
    }
    updateShipment(shipment){
        return axios.put(`http://localhost:4472/UpdateShipment`,shipment)
    }
}
export default ShipmentService;