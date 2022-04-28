import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink} from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import {adduser,loginname} from '../redux/action/uesrs'
import {create1111Data,
  create11010Data,
  create11011Data,
  create11012Data,
  setreadstate} from '../redux/action/getdata'

 function Login(props) {

  const [ft,setft]=useState(false);
  const [ftemail,setftemail]=useState(0)

  const [loginEmail,setloginEmail]=useState('')
  const [loginPassword,setloginPassword]=useState('')

  const userdata=props.userdata
  const opendatas=props.opendatas

  

  function login(){
    if(loginEmail==0||loginPassword==0){
      alert('請全部填寫，不得有空著')
    }
    else{
      userdata.map((u)=>{
        if(u.email==loginEmail){
          setftemail(1)
          if(u.password==loginPassword){
            props.loginname(u.name)
            setft(true)
            // props.loginname(u.name)
            Ajax()
          }
          else{
            alert('密碼錯誤')
          }
        }   
        else{
          return
        }  
      })
    }
    
  }
  function Ajax(){
    //111/1
    axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/6542abee-048d-4389-9034-aed6d7ac44e1').then(
      Response=>{
        const data=Response.data
        props.add1111Data(data)
        
      },
      error=>{
        console.log(error.message)
      }
    )
    //110/12
    axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/9aeec405-0ee0-4521-a1ec-c8a875f61039').then(
      Response=>{
        const data=Response.data
        props.add11012Data(data)
      },
      error=>{
        console.log(error.message)
      }
    )
    //110/11
    axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/c3c2beea-f716-42bd-8f77-bff2675d4c4b').then(
      Response=>{
        const data=Response.data
        props.add11011Data(data)
      },
      error=>{
        console.log(error.message)
      }
    )
    //110/10
    axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/a7c053a7-1f25-4b78-8a7b-28bf90ff9dff').then(
      Response=>{
        const data=Response.data
        props.add11010Data(data)
      },
      error=>{
        console.log(error.message)
      }
    )
  }

  return (
    <div className='bg-default'>
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
                  <Link to="/register" className="nav-link nav-link-icon" >
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
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary shadow border-0">
                
                <div className="card-body px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form role="form">
                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input className="form-control" placeholder="Email" type="email" onChange={(event)=>{setloginEmail(event.target.value)}}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                        </div>
                        <input className="form-control" placeholder="Password" type="password" onChange={(event)=>{setloginPassword(event.target.value)}}/>
                      </div>
                    </div>
                  
                    <div className="text-center">
                      <button type="button" className="btn btn-primary my-4" onClick={login}>Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <footer className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col-xl-6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                </div>
              </div>
              <div className="col-xl-6">
                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className='loginSuccessful' style={{display: ft?'':'none'}}>
        <div>
          <h1>登陸成功</h1>
          <NavLink to='/indexpage'>完成</NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default connect(
  state=>({userdata:state.userdata,
    opendatas:state.getdata}),{
    adduser:adduser,
    loginname:loginname,
    add1111Data:create1111Data,
    add11012Data:create11012Data,
    add11011Data:create11011Data,
    add11010Data:create11010Data,
    setreadstate:setreadstate
  }
)(Login)
