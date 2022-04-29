import {
    GET1111DATA,
    GET11010DATA,
    GET11011DATA,
    GET11012DATA,
    READSTATE
} from '../constant'

export const create1111Data = data => ({ type: GET1111DATA, data })
export const create11012Data = data => ({ type: GET11012DATA, data })
export const create11011Data = data => ({ type: GET11011DATA, data })
export const create11010Data = data => ({ type: GET11010DATA, data })
export const setreadstate = data => ({ type: READSTATE, data })