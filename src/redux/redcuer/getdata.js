import {GET1111DATA,
    GET11010DATA,
    GET11011DATA,
    GET11012DATA,
READSTATE} from '../constant'

const initState={readstate:false}
export default function getdataReducer(preState=initState,action){
    const{type,data}=action
    switch(type){
        case GET1111DATA:
            return {data1111:data,...preState}
        case GET11010DATA:
            return {data11010:data,...preState}
        case GET11011DATA:
            return {data11011:data,...preState}
        case GET11012DATA:
            return {data11012:data,...preState}
        case READSTATE:
            return 
        default:
            return preState
    }
}