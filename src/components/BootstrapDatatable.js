import React from 'react'
import './App.css';
//import datas from './datas.json';


export default function BootstrapDatatable(datas) {
    

const renderTableData = () =>{
    return datas.map((data, index) => {
       const { idOrder_No, Total_Amount, Total_Quantity, User_Name } = data //destructuring
       return (
          <tr key={idOrder_No}>
             <td>{idOrder_No}</td>
          </tr>
       )
    })
 };


    return (
        <div>
            <table>
            <tr>
                <th>Order No</th>
                <th>Total Amount</th>
                <th>Total Quantity</th>
                <th>User Name</th>
            </tr>
            
                <tbody>
                {renderTableData()}
                </tbody>
            
            
            </table>
        </div>
    )
}
