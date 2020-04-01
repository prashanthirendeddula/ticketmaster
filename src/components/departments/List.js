import React from "react"
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetDepartments,startRemoveDepartment} from '../../actions/departmentAction'
function DepartmentsList(props){
  const  handleRemove=(id)=>{
      const confirmRemove=window.confirm('are u sure?')
      if(confirmRemove){
         props. dispatch(startRemoveDepartment(id))
      }
  }
    if(props.departments.length==0){
        props.dispatch(startGetDepartments())
    }
    return(
        <div>
            <h1>Listing Departments-{props.departments.length}</h1>
           <ul>
            {
                props.departments.map(department=>{
   return <li key= {department._id}><Link to={`/departments/${department._id}`} >{department.name}</Link>
   <button onClick={()=>{handleRemove(department._id)}}>remove</button></li>
                })
            }
            </ul>
            <Link to='/departments/new'>Add Departments</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
    departments:state.departments
    }
}
export default connect(mapStateToProps) (DepartmentsList)