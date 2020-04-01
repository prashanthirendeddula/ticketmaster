import React from "react"
import {connect}from "react-redux"
import {startAddDepartments}from '../../actions/departmentAction'

import DepartmentForm from '../departments/DepartmentForm'
function DepartmentNew(props){
    const redirect=()=>{
        props.history.push('/departments')
    }
    const handleSubmit=(formData)=>{
        props.dispatch(startAddDepartments(formData,redirect))
    }
    return(
        <div>
            <h1>Add Department</h1>
            <DepartmentForm handleSubmit={handleSubmit}/>

            </div>
    )
}
export default connect() (DepartmentNew)