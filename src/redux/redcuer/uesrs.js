import {ADDUSER,LOGINNAME} from '../constant'

const initState=[{id:1,name:'mike',email:'abc@gmail.com',password:'123456'}]
export default function adduserReducer(preState=initState,action){
    const{type,data}=action
    switch(type){
        case ADDUSER:
            return [...preState,data]
        case LOGINNAME:
            return [{loginname:data},...preState]
        default:
            return preState
    }
}