import React from  "react"
import CustomerForm from '../Customers/CustomerForm'
import {connect} from "react-redux"
import {startEditCustomer} from '../../actions/customerAction'

function CustomerEdit(props){
    const redirect=()=>{
        props.history.push('/customers')
    }
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        props.dispatch(startEditCustomer(formData,id,redirect))
    }
    return(
        <div>
            <h1>Edit customer</h1>
            <CustomerForm  handleSubmit={handleSubmit}/>
        </div>
    )
}
export default  connect()(CustomerEdit)