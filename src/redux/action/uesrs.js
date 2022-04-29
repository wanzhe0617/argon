import { ADDUSER, LOGINNAME } from '../constant'

export const adduser = data => ({ type: ADDUSER, data })
export const loginname = data => ({ type: LOGINNAME, data })