import React from  "react"
import CustomerForm from '../Customers/CustomerForm'
import {connect} from 'react-redux'
import { startAddCustomers } from "../../actions/customerAction"
function CustomerNew(props){
    const redirect=()=>{
        props.history.push('/customers')
       }
      
    const handleSubmit=(formData)=>{
        props.dispatch(startAddCustomers(formData,redirect))
    }
    return(
        <div>
            <h1>add customer</h1>
            <CustomerForm  handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (CustomerNew)