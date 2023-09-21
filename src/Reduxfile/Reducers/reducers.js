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
  export const comicdata=(state=[],actions)=>{
   switch(actions.type){
    case "REQ":
      return{stat:[],loading:true}
    case "SUC":
      return{stat:actions.payload,loading:false}
    case "FAIL":
      return {stat:[],err:actions.payload}  
      default : return{state}

   }
  }
