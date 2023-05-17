export const Reducer=(state,action)=>{
       switch (action.type) {
        case "START":
            return{
                user:null,
                loading:true,
                error:false
            };
            
            case "USER":
            return{
                user:action.pyload,
                loading:false,
                error:false
            };
            
            case "ERROR":
            return{
                user:false,
                loading:false,
                error:true
            };
            
       
        default:
            return state
       }
}