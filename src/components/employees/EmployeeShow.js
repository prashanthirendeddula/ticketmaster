import React from "react"
import {connect} from "react-redux"
import {findEmployee} from '../../selectors/employeeSelector'
import {Link} from 'react-router-dom'

function EmployeeShow(props){
    
    return(
        <div>
            {
                props.employee?(
                    <div>
                      <h1>EmployeeShow-{props.employee._id}</h1>
  <p>{props.employee.name}-{props.employee.email}-{props.employee.mobile}-{props.employee.department.name}</p>
  <Link to={`/employees/edit/${props.match.params.id}`}  >EditEmployee</Link>

                       
                               <Link to='/employees'>back</Link>
                               </div>


                ):(
                    <div>
                    loading
                    </div>
                )
            
                }
        </div>
            
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        employee:findEmployee(state.employees,id),
        department:state.department
    }
}
export default connect(mapStateToProps) (EmployeeShow)