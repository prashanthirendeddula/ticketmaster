import React from 'react'
import axios from '../config/axios'

export const setCustomers=(customers)=>{
    return {
        type:'SET_CUSTOMERS',payload:customers
    }
}


export const startSetCustomers=()=>{//asyn action creator
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('authToken')

            }
        })
        .then((response)=>{
            const customers=response.data
            dispatch(setCustomers(customers))
            console.log(customers)
        })
    }
}

//Adding customer
    export const addCustomer=(customer)=>{
        return{
            type:"ADD_CUSTOMERS",payload:customer
        }
    }

export const startAddCustomers=(formData,redirect)=>{
    return(dispatch)=>{ //async
        axios.post('/customers',formData,{
            headers:{
                "x-auth":localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            console.log(response.data)
            const customer=response.data
            dispatch(addCustomer(customer))
            redirect()
        })
    }
}
//remove a customer

         export  const removeCustomer=(id)=>{
             return{
                 type:"REMOVE_CUSTOMER",payload:id
             }
         }
   export const startRemoveCustomer=(id)=>{
       return(dispatch)=>{
           axios.delete (`/customers/${id}`,{
               headers:{
                   'x-auth':localStorage.getItem('authToken')
               }
           })
           .then((response)=>{
               console.log(response.data)
               const customer=response.data
               dispatch(removeCustomer(customer._id))
           })
       }
   }
   //update a customer
     export const editCustomer=(customer)=>{
         return {
             type:"EDIT_CUSTOMER",payload:customer
         }
     }

   export const startEditCustomer=(formData,id,redirect)=>{
       return(dispatch)=>{  //async action
           axios.put(`/customers/${id}`,formData,{
               headers:{
                   'x-auth':localStorage.getItem("authToken")
               }
           })
           .then((response)=>{
               console.log(response.data)
               const customer=response.data
               dispatch(editCustomer(customer,id))
               redirect()
           })
       }
   } 