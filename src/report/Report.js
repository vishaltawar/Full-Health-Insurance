import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Admin/Footer';
import Header from '../Admin/Header';
import ReportService from './ReportService';

 function Report() {
    let service=new ReportService();

    return (
        <div>
             
             {sessionStorage.getItem('role')==='Administrator'?(
        <div>
            <Header></Header>
             <div  style={{ backgroundImage: "url(/report.jpg)", backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:'650px',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'transparent'}} >
           
            <p><b>From this report section,you can download weekly and monthly reports based on your requirements.Currently you can download the reports for january 2022</b></p>
            <table align='center' className='table-bordered'  style={{"borderWidth":"10px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} >
                <tbody>
                <tr>
                    <th>
                        From
                    </th>
                    <th>To</th>
                    <th>Week code</th>
                </tr>
                <tr>
                    <th>01-01-2022</th>
                    <th>08-01-2022</th>
                    <th>week 1</th>
                   
                </tr>
                <tr>
                    <th>08-01-2022</th>
                    <th>16-01-2022</th>
                    <th>week 2</th>
                   
                </tr>
                <tr>
                    <th>16-01-2022</th>
                    <th>23-01-2022</th>
                    <th>week 3</th>
                   
                </tr>
                <tr>
                    <th>23-01-2022</th>
                    <th>31-01-2022</th>
                    <th>week 4</th>
                   
                </tr>
                </tbody>
            </table>
            <form>
                <table align='center'>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    Enter the week for which you want to download the report
                                </label>
                            </td>
                            <td><input type="text" placeholder='Enter the weekcode' id='week'></input></td>
                        </tr>
                        <tr className='text-center'>
                            <td>
                            <button className="btn btn-primary" onClick={(e)=>{
                            e.preventDefault()
                            service.generateWeeklyReport(document.getElementById('week').value).then((result)=>alert(result.data)).catch(
                                (error)=>alert(error)
                            )
                            
                             } }>Download</button>
                             </td>
                             <td>
                               
                             </td>
                        </tr>
                        <tr>
                        <td>
                                <label>
                                    Enter the month for which you want to download the report
                                </label>
                            </td>
                            <td><input type="text" placeholder='Enter the month' id='month'></input></td>
                            </tr>
                            <tr className='text-center'>
                            <button className="btn btn-primary" onClick={(e)=>{
                            e.preventDefault()
                            service.generateMonthlyReport(document.getElementById('month').value).then((result)=>alert(result.data)).catch(
                                (error)=>alert(error.data)
                            )
                            
                             } }>Download</button>
                       
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
            <Footer/>
        </div>
          ) :  (
            <div>
                <Header />
        <div className="card text-white bg-danger mb-3" >
        <div className="card-header">Warning</div>
        <div className="card-body">
          <h5 className="card-title">Unauthorized Access</h5>
          <p className="card-text">You should be a Administrator to access this page</p>
        </div>
        </div>
        <Footer />
        </div>) }
        </div>
    )
}
export default Report;

