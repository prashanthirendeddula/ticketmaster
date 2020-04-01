import React from "react"
import{connect} from 'react-redux'
import {findDepartment} from '../../selectors/departmentSelector'
import {Link} from 'react-router-dom'
function DepartmentShow(props){
    const{_id,name}=props.department||{}
    return(
        <div>
            {props.department?(<div>
                <h1>department show-{_id}</h1>
            <p>{name}</p>
            <Link  to={`/departments/edit/${_id}`}>EditDepartment</Link>

            <Link to='/departments'>back</Link>
    </div>
                ):(<div>
                    Loading..
                 </div>)
                
                }

                  </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        department:findDepartment(state.departments,id)
    }
}
export default connect(mapStateToProps) (DepartmentShow)