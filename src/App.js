import React from 'react';
import Home from './components/Home'
import Register from'./components/Register'
import Login from './components/Login'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import {connect} from'react-redux'
import Account from './components/Account'
import CustomerList from'./components/Customers/List'
import CustomerShow from './components/Customers/CustomerShow'
import CustomerNew from './components/Customers/CustomerNew'
import EditCustomer from './components/Customers/CustomerEdit'
import {startLogout} from './actions/userAction'
import DepartmentsList from './components/departments/List'
import DepartmentShow from './components/departments/DepartmentShow'
import DepartmentNew from'./components/departments/DepartmentNew'
import DepartmentEdit from './components/departments/DepartmentEdit'
import EmployeesList from './components/employees/EmployeeList'
import EmployeeShow from './components/employees/EmployeeShow'
import EmployeeNew from './components/employees/EmployeeNew'
import EmployeeEdit from './components/employees/EmployeeEdit'
import TicketLists from './components/Tickets/TicketLists'
import AddTicket from './components/Tickets/AddTicket'
import ShowTicket from './components/Tickets/ShowTicket'
import EditTicket from './components/Tickets/EditTicket'


function App(props) {
  const handleLogout=()=>{
    props.dispatch(startLogout())
  }
  return (
    <BrowserRouter>
    <div>
      <h1>TicketMaster</h1>
  <Link to='/'>Home</Link><br/>
  {Object.keys(props.user).length==0?(
    <div>
     <Link to='/users/register'>Register</Link><br/>
     <Link to='/users/login'>Login</Link>

     </div>
  ):(
    <div>
       <Link to='/customers'>Customers</Link>
      <Link to='/users/account'>account</Link>
      <Link to='/departments'>departments</Link>
      <Link to='/employees'>employees</Link>
      <Link to='/tickets'>Tickets</Link>

      <Link to='#' onClick={()=>{handleLogout()}}>logout</Link>

      
      </div>

  )
}
   <Switch>
  <Route path='/'component={Home} exact={true}/>
  <Route path='/users/register' component={Register}/>
  <Route path='/users/login'component={Login}/>
  <Route path='/users/account' component={Account}/>
  <Route path='/customers'component={CustomerList} exact={true}/>
  <Route path='/customers/new'component={CustomerNew}/>
  <Route path='/customers/edit/:id'component={EditCustomer}/>
  <Route path='/customers/:id' component={CustomerShow}/>
  <Route path='/departments' component={DepartmentsList} exact={true}/>
  <Route path='/departments/new'component={DepartmentNew}/>
  <Route path='/departments/edit/:id'component={DepartmentEdit}/>

  <Route path='/departments/:id' component={DepartmentShow}/>
  <Route path='/employees'component={EmployeesList} exact={true}/>
  <Route path='/employees/new' component={EmployeeNew}/>
  <Route path='/employees/edit/:id'component={EmployeeEdit}/>
  <Route path='/employees/:id' component={EmployeeShow}/>
  <Route path="/tickets" component={TicketLists} exact={true} />
  <Route path="/ticket/new" component={AddTicket} />
        <Route path="/tickets/edit/:id" component={EditTicket} />
        <Route path="/tickets/:id" component={ShowTicket} />



  

  </Switch>
    </div>
    </BrowserRouter>
   
  );
}
const mapStateToProps=(state)=>{
  return{
  user:state.user
  }
}
export default connect(mapStateToProps) (App);
