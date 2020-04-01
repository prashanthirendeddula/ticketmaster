import { renderIntoDocument } from "react-dom/test-utils"

const employeesReducersInitialState=[

] 
const employeesReducer=(state=employeesReducersInitialState,action)=>{
      switch(action.type){
          case 'SET_EMPLOYEE':{
              return [...action.payload]
          }
      case "ADD_EMPLOYEE":{
                  return [...state,action.payload]
              }
              case "REMOVE_EMPLOYEE":{
                return state.filter(employee=>employee._id!=action.payload)

              }
              case "EDIT_EMPLOYEE":{
                  return state.map(employee=>{
                      if(employee._id==action.payload._id){
                          return{...employee,...action.payload}
                      }else{
                          return{...employee}
                      }
                  })

              }
          
          default:{
              return [...state]
          }
      }
}
export default employeesReducer