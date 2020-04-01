import axios from '../config/axios'



export const setDepartments=(departments)=>{
    return{
        type:"GET_DEPARTMENTS",
        payload:departments
    }
}
 export const startGetDepartments=()=>{
    return(dispatch)=>{  //async
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const departments=response.data
            dispatch(setDepartments(departments))
        })
    }
}
//adding department
const addDepartment=(department)=>{
    return {
        type:"ADD_DEPARTMENT",payload:department

    }
}
export const startAddDepartments=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/departments',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department=response.data
            dispatch(addDepartment(department))
           redirect()
        })
    }

}
//removing department
  export const removeDepartment=(id)=>{
      return{
          type:'REMOVE_DEPARTMENT',
          payload:id}
  }
 export const startRemoveDepartment=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
            const department=response.data
            dispatch(removeDepartment(department._id))
        })
    }
}
//editing department
export const editDepartment=(department)=>{
    return {
        type:"EDIT_DEPARTMENT",payload:department
    }
}

export const startEditDepartment=(formData,id,redirect)=>{
       return(dispatch)=>{
           axios.put(`departments/${id}`,formData,{
               headers:{
                   'x-auth':localStorage.getItem('authToken')
               }
           })
           .then((response)=>{
               console.log(response.data)
               const department=response.data
               dispatch(editDepartment(department))
               redirect()
           })
       }
}