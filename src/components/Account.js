import React from "react"
import { connect } from "react-redux"
function Account(props){
    return(
        <div>
   <h1>account details</h1>
   <h1>{props.user.username}</h1>
   <h1>{props.user.email}</h1>

        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Account)