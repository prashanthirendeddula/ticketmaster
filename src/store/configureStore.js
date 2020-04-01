import{createStore,combineReducers,applyMiddleware}from 'redux'
import userReducer from'../reducers/user'
import thunk from 'redux-thunk'
import customersReducer from'../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentReducer'
import employeesReducer from '../reducers/employessReducer'
import ticketsReducer from '../reducers/ticketsReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        customers:customersReducer,
        departments:departmentsReducer,
        employees:employeesReducer,
        tickets:ticketsReducer

       
    }),applyMiddleware(thunk))
    return store

}
export default configureStore