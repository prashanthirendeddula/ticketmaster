import React from "react" 
import {connect} from "react-redux"
import {startRegister} from '../actions/userAction'

     class Register extends React.Component{
                constructor(){
                    console.log('constructor')
                    super()
                    this.state={

                        username:'',
                        email:'',
                        password:''

                    }

                }
                handleChange=(e)=>{
                    this.setState({
                        [e.target.name]:e.target.value
                    })

                }
              /*  handleEmailChange=(e)=>{
                    const email=e.target.value
                    this.setState({email})
                    
                }
                handlePasswordChange=(e)=>{
                    const password=e.target.value
                    this.setState({password})
                }*/
                handleSubmit=(e)=>{
                   e.preventDefault()
                   const formData={
                    username:this.state.username,
                     email:this.state.email,
                     password:this.state.password
     }
   console.log(formData)
      const redirect=()=>{
          this.props.history.push('/users/login')
      }
                  this.props.dispatch(startRegister(formData,redirect))
             // this.props.history.push('/users/login')

    }

               
                render(){
                    return(
                        <div>

                            <h1>Register</h1>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="username" placeholder="userName" value=
                                {this.state.username} onChange=
                                {this.handleChange}/>
                                 <br/>
                                 <br/>
                                <input type="text" name="email" placeholder="email" value=
                                {this.state.email} onChange=
                                {this.handleChange}/> 
                                 <br/>
                                 <br/>
                                <input type="password" name="password" placeholder="password" value=
                                {this.state.password} onChange=
                                {this.handleChange}/> 
                                <br/><br/>



                              <input type="submit"  value="register"/>
                                    
                                </form>
                            </div>
                    )
                }
            }
export default connect()(Register)        