import axios from '../config/axios'
//getting employees
export const setEmployees=(employee)=>{
    return{
        type:"SET_EMPLOYEE",payload:employee
    }
}


export const startGetEmployee=()=>{
    return(dispatch)=>{
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee=response.data
            dispatch(setEmployees(employee))
               })
    }
}
//adding employee
export const addEmployee=(employee)=>{
    return{
        type:"ADD_EMPLOYEE",payload:employee
    }
}
 export const startAddEmployees=(formData,redirect)=>{
    return(dispatch)=>{  //async action
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem("authToken")
            }
        })
        .then((response)=>{
            const employee=response.data
            dispatch(addEmployee(employee))
            redirect()
        })
    }
}
//removing employee
export  const removeEmployee=(id)=>{
    return{
        type:"REMOVE_EMPLOYEE",payload:id
    }
}
export const startRemoveEmployee=(id)=>{
return(dispatch)=>{
  axios.delete (`/employees/${id}`,{
      headers:{
          'x-auth':localStorage.getItem('authToken')
      }
  })
  .then((response)=>{
      console.log(response.data)
     const employee=response.data
      dispatch(removeEmployee(employee._id))
  })
}
}

//editing department
export const editEmployee=(employee)=>{
    return {
        type:"EDIT_EMPLOYEE",payload:employee
    }
}

export const startEditEmployee=(formData,id,redirect)=>{
  return(dispatch)=>{  //async action
      axios.put(`/employees/${id}`,formData,{
          headers:{
              'x-auth':localStorage.getItem("authToken")
          }
      })
      .then((response)=>{
          console.log(response.data)
          const employee=response.data
          dispatch(editEmployee(employee,id))
          redirect()
      })
  }
} 
