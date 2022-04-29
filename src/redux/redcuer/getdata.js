import {
    GET1111DATA,
    GET11010DATA,
    GET11011DATA,
    GET11012DATA,
    READSTATE
} from '../constant'

const initState = { readstate: false }
export default function getdataReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case READSTATE:
            return { readstate: data }
        case GET1111DATA:
            return { ...preState, data1111: data }
        case GET11010DATA:
            return { ...preState, data11010: data }
        case GET11011DATA:
            return { ...preState, data11011: data }
        case GET11012DATA:
            return { ...preState, data11012: data }
        default:
            return preState
    }
}