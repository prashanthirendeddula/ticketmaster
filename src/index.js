import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider }from 'react-redux'//installing for avilable state to all components
import {startSetUser} from'./actions/userAction'
import {startGetDepartments} from './actions/departmentAction'
import {startSetCustomers} from './actions/customerAction'
import{startGetEmployee} from './actions/employeeAction'


const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
//prevents page reload
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startGetDepartments())
    store.dispatch(startGetEmployee())
}

const jsx=(
    <Provider store={store}>
     <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

