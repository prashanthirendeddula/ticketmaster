import React from "react"
import EmployeeForm from '../employees/EmployeeForm'
import {connect} from "react-redux"
import {startEditEmployee} from '../../actions/employeeAction'
function EmployeeEdit(props){
    const redirect=()=>{props.history.push('/employees')}

    
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        props.dispatch(startEditEmployee(formData,id,redirect))
    }
    return(
        <div>
            <h1>edit employee</h1>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (EmployeeEdit)