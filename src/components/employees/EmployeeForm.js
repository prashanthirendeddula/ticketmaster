import React from "react"
import {connect} from "react-redux"
import {findEmployee} from '../../selectors/employeeSelector'
import {withRouter} from "react-router-dom"

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.employee?props.employee.name: "",
            email:props.employee?props.employee.email:"",
            mobile:props.employee?props.employee.mobile:'',
            department:props.employee?props.employee.department.name:''

        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

    handleDepartment=(e)=>{
        this.setState({department:e.target.value})
    }
    render(){
        return(
            <div>  
                <h1>form</h1>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">name</label>
                <input type="text"  id="name" name="name" value={this.state.name} onChange=
                {this.handleChange}/> <br/>
                <label htmlFor="email">email</label>
                <input type="text"  id="email" name="email" value={this.state.email} onChange=
                {this.handleChange}/> <br/>
                <label htmlFor="mobile">mobile</label>
                <input type="text"  id="mobile"   name="mobile" value={this.state.mobile} onChange=
                {this.handleChange}/><br/>
                <label htmlFor="department">department</label>
                <select value={this.state.department}  onChange={this.handleDepartment}>

                    <option value="">select</option>
                    {this.props.departments.map(department => {
                        return <option value={department._id}>{department.name}</option>
                    })}
                </select>
                <input type="submit" value="submit"/>
                </form>

            </div>
            
        )
    }


}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
        departments:state.departments,
        employee:findEmployee(state.employees,id)

    }
}
export default withRouter(connect(mapStateToProps)(EmployeeForm))