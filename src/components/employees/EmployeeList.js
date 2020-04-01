import React from "react"
import {connect} from "react-redux"
import {Link} from'react-router-dom'
import {findEmployee} from '../../selectors/employeeSelector'

import {startGetEmployee,startRemoveEmployee}from '../../actions/employeeAction'
 function EmployeesList (props){
    const  handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure?')
        if(confirmRemove){
            props.dispatch(startRemoveEmployee(id))
        }
    }
    if(props.employees.length==0){
        props.dispatch(startGetEmployee())
             
    
    }
     return(
                 <div>
             <h1>employeesList-{props.employees.length}</h1>
            {/* <table border="1">
                 <thead>
                     <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>email</th>
                         <th>mobile</th>
                         <th>department</th>

                     </tr>
                 </thead>
     <tbody>*/}
                 <ul>
                 {
                     
                     props.employees.map(employee=>{
             return <li key={employee._id}><Link to={`/employees/${employee._id}`}>{employee.name}</Link>
             
             <button onClick={()=>handleRemove(employee._id)}>remove</button></li>
                
                  
            })
                 }
                </ul>


               {/*  </tbody>
             </table>*/}
         
                               

             <Link to='/employees/new'>Add Employees</Link>
         </div>
     )
 }
 const mapStateToProps=(state,props)=>{
    const id=props.match.params.id

     return{
        employee:findEmployee(state.employees,id),

     employees:state.employees
     }
 }
 export default connect(mapStateToProps) (EmployeesList)