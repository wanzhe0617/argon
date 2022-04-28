import { Navigate } from 'react-router-dom'
import Login from '../Page/Login'
import Register from '../Page/Register'
import IndexPage from '../Page/IndexPage'
import Tc110_10 from '../Page/Tc110_10'
import Tc111_1 from '../Page/Tc111_1'
import Tc110_11 from '../Page/Tc110_11'
import Tc110_12 from '../Page/Tc110_12'

export default[
    {path:'/login',element:<Login/>},
    {path:'/register',element:<Register/>},
    {path:'/indexpage',element:<IndexPage/>,children:[
      {path:'tc111_1',element:<Tc111_1/>},
      {path:'tc110_12',element:<Tc110_12/>},
      {path:'tc110_11',element:<Tc110_11/>},
      {path:'tc110_10',element:<Tc110_10/>},
      {path:'',element:<Navigate to='tc111_1'/>}
    ]},
    {path:'/',element:<Navigate to='/login'/>}
  ]