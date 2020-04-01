
    import React from "react"
    import {connect}from 'react-redux' 
    import {startLogin}from '../actions/userAction'
    class Login extends React.Component{
               constructor(){
                   console.log('constructor')
                   super()
                   this.state={

                    
                       email:'',
                       password:''

                   }

               }
                  handleChange=(e)=>{
                   this.setState({
                       [e.target.name]:e.target.value
                   })
                   
               }
            /*   handlePasswordChange=(e)=>{
                   const password=e.target.value
                   this.setState=({password})
               }*/
               handleSubmit=(e)=>{
                  e.preventDefault()
                  const formData={
                   password:this.state.password,
                    email:this.state.email
    }
    const redirect=()=>{
        this.props.history.push('/')
    }
    this.props.dispatch(startLogin(formData,redirect))
       
               }
              
               render(){
                   return(
                       <div>

                           <h1>Login</h1>
                           <form onSubmit={this.handleSubmit}>
                               <input type="text" name="email" placeholder="email" value=
                               {this.state.email} onChange=
                               {this.handleChange}/> 
                                <br/>
                               <input type="password" name="password" placeholder="password" value=
                               {this.state.password} onChange=
                               {this.handleChange}/> 
                               <br/>



                             <input type="submit"  value="login"/>
                                   
                               </form>
                           </div>
                   )
               }
           }
export default connect() (Login)        
