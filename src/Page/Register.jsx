import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import {adduser} from '../redux/action/uesrs'

function Register(props) {

  const userdata=props.userdata

  const [registerName,setregisterName]=useState('')
  const [registerEmail,setregisterEmail]=useState('')
  const [registerPassword,setregisterPassword]=useState('')
  const [registerCheckpassword,setregisterCheckpassword]=useState('')

  const [ft,setft]=useState(false)




  function register(){
    if(registerName==0||registerEmail==0||registerPassword==0||registerCheckpassword==0){
      alert('請全部填寫，不得有空著')
    }
    else if(registerPassword!==registerCheckpassword){
      alert("Password&Check Password不一樣")
    }
    else{
      
      const data={id:userdata.length,name:registerName,email:registerEmail,password:registerPassword}
      props.adduser(data)
      setft(true)
      // window.location.to = `/`
    }
  }

  return (
    <div className="bg-default">
      <div className="main-content">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
          <div className="container px-4">
            <Link className="navbar-brand" to='/'>
              <img src="../assets/img/brand/white.png" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse-main">
              {/* <!-- Collapse header --> */}
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="../index.html">
                      <img src="../assets/img/brand/blue.png"/>
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Navbar items --> */}
              <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                  <Link to="/register" className="nav-link nav-link-icon" >
                    <i className="ni ni-circle-08"></i>
                    <span className="nav-link-inner--text">Register</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link nav-link-icon" >
                    <i className="ni ni-key-25"></i>
                    <span className="nav-link-inner--text">Login</span>
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Header --> */}
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-7">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
        {/* <!-- Page content --> */}
        <div className="container mt--8 pb-5">
          {/* <!-- Table --> */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="card bg-secondary shadow border-0">
              
                <div className="card-body px-lg-5 py-lg-5">

                  <form role="form">
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                        </div>
                        <input className="form-control" placeholder="Name" type="text" onChange={(event)=>{setregisterName(event.target.value)}}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input className="form-control" placeholder="Email" type="email" onChange={(event)=>{setregisterEmail(event.target.value)}}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input className="form-control" placeholder="Password" type="password" onChange={(event)=>{setregisterPassword(event.target.value)}}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input className="form-control" placeholder="Check Password" type="password" onChange={(event)=>{setregisterCheckpassword(event.target.value)}}/>
                      </div>
                    </div>                
                  
                    <div className="text-center">
                      <button type="button" className="btn btn-primary mt-4" onClick={register}>Create account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='loginSuccessful' style={{display: ft?'':'none'}}>
        <div>
          <h1>註冊成功</h1>
          <NavLink to='/login'>完成</NavLink>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state=>({userdata:state.userdata}),{
    adduser:adduser
  }
)(Register)
