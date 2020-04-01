import React from  "react"
import DepartmentForm from '../departments/DepartmentForm'
import {connect} from "react-redux"
import {startEditDepartment}from '../../actions/departmentAction'

function DepartmentEdit(props){
    const redirect=()=>props.history.push('/departments')
const handleSubmit=(formData)=>{
    const id=props.match.params.id
    props.dispatch(startEditDepartment(formData,id,redirect))
}
    return(
        <div>
            <h1>Edit department</h1>
            <DepartmentForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default  connect()(DepartmentEdit)

