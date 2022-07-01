import axios from "axios";

class ReportService{
    generateWeeklyReport(week){
        return axios.get(`http://localhost:4472/GenerateReport/${week}`)
    }
    generateMonthlyReport(month){
        return axios.get(`http://localhost:4472/GenerateMonthlyReport/${month}`)
    }
}
export default ReportService;