export const comdata = (state={resdata:[]},action)=>{
    switch(action.type){
      case "GET_USER_REQ":
        return {
          resdata:[],
          loading:true
        }
        case "GET_USER_SUC":
          return{
            resdata:action.payload,
            loading:false
          }
          case "GET_USER_FAIL":
          return {
            resdata:[],
            err:action.payload
          }
          default : return{state}
    }
  }