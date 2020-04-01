import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import {findCustomer} from'../../selectors/customerSelector'
function CustomerShow(props){
    const{_id,name,email,mobile}=props.customer || {}//object destructuring
    return (
        <div>
            {
                props.customer?(
                    <div>
                        <h1>customerShow-{_id}</h1>
            <h2>{name}-{email}-{mobile}</h2>
            <Link  to={`/customers/edit/${_id}`}>EditCustomer</Link>

           <Link to='/customers'>back</Link>

 

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
    customer:findCustomer(state.customers,id)
    }
}
export default connect(mapStateToProps) (CustomerShow)