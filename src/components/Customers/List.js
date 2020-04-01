import React from 'react'
import {connect} from 'react-redux'
import {Link} from"react-router-dom"
import {startSetCustomers,startRemoveCustomer} from '../../actions/customerAction'
function CustomerList(props){
    const  handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure?')
        if(confirmRemove){
            props.dispatch(startRemoveCustomer(id))
        }
    }
    if(props.customers.length==0){
        props.dispatch(startSetCustomers())

    }
    return(
        <div>
            <h1>Listing Customers-{props.customers.length}</h1>
            <ul>
                {
                    props.customers.map(customer=>{
          return <li key= {customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}
          </Link> <button onClick={()=>{handleRemove(customer._id)}}>remove</button></li>
                    })
                }

            </ul>
            <Link to='/customers/new'>AddCustomers</Link>

        
        </div>
    )
}
const mapStatetoProps=(state)=>{
  return{
      customers:state.customers
  }
}
export default connect(mapStatetoProps) (CustomerList)