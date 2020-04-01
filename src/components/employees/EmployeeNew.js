import React from "react"
import EmployeeForm from '../employees/EmployeeForm'
import {connect} from "react-redux"
import {startAddEmployees}from '../../actions/employeeAction'
function EmployeeNew(props){
    const redirect=()=>{
        props.history.push('/employees')
    }
    const handleSubmit=(formData)=>{
        props.dispatch(startAddEmployees(formData,redirect))

    }
    return(
        <div>
            <h1>Add Employees</h1>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (EmployeeNew)