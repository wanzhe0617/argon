import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { adduser, loginname } from '../redux/action/uesrs'
import {
    create1111Data,
    create11010Data,
    create11011Data,
    create11012Data,
    setreadstate
} from '../redux/action/getdata'
import { Link, NavLink, Outlet } from 'react-router-dom'

function IndexPage(props) {
    const userdata = props.userdata
    const[show,setshow]=useState(false)


    return (
        <div>
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    {/* <!-- Toggler --> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- Brand --> */}
                    <Link className="navbar-brand pt-0" to='/'>
                        <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </Link>
                    {/* <!-- User --> */}
                    <ul className="nav align-items-center d-md-none">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-bell-55"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="media align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        <img alt="Image placeholder" src="../assets/img/theme/team-1-800x800.jpg" />
                                    </span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                <div className=" dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a href="#!" className="dropdown-item">
                                    <i className="ni ni-user-run"></i>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- Collapse --> */}
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        {/* <!-- Collapse header --> */}
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="../index.html">
                                        <img src="../assets/img/brand/blue.png" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Form --> */}
                        <form className="mt-4 mb-3 d-md-none">
                            <div className="input-group input-group-rounded input-group-merge">
                                <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="fa fa-search"></span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- Navigation --> */}
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink to='tc111_1' className="nav-link  active " >
                                    <i className="ni ni-bullet-list-67 text-red"></i> 111年1月
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='tc110_12' className="nav-link  active ">
                                    <i className="ni ni-bullet-list-67 text-red"></i> 110年12月
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='tc110_11' className="nav-link  active ">
                                    <i className="ni ni-bullet-list-67 text-red"></i> 110年11月
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='tc110_10' className="nav-link  active ">
                                    <i className="ni ni-bullet-list-67 text-red"></i> 110年10月
                                </NavLink>
                            </li>
                        </ul>
                        {/* <!-- Divider --> */}
                    </div>
                </div>
            </nav>
            <div className="main-content">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                    <div className="container-fluid">
                        {/* <!-- Brand --> */}
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">Tables</a>
                        {/* <!-- User --> */}
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={()=>{setshow(!show)}}>
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="" src="../assets/img/theme/team-4-800x800.jpg" />
                                        </span>
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">{userdata[0].loginname}</span>
                                        </div>
                                    </div>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-arrow dropdown-menu-right ${show? 'show':null}`}>
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </div>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}
                {/* <!-- Header --> */}
                <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                    <div className="container-fluid">
                        <div className="header-body">
                            {/* <!-- Card stats --> */}
                            <div className="card card-stats mb-4 mb-xl-0">
                                <div className="card-body">
                                    <div className="col">
                                        <span className="h2 font-weight-bold mb-0">臺中市十大易肇事路段(口)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt--7">
                    {/* <!-- Table --> */}
                    <div className="row">
                        <div className="col">
                            <Outlet />
                        </div>
                    </div>
                    {/* <!-- Dark table --> */}

                    {/* <!-- Footer --> */}
                    <footer className="footer">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-xl-6">
                                <div className="copyright text-center text-xl-left text-muted">
                                    &copy; 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
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
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default connect(
    state => ({
        userdata: state.userdata,
        opendatas: state.getdata
    }), {
    add1111Data: create1111Data,
    add11012Data: create11012Data,
    add11011Data: create11011Data,
    add11010Data: create11010Data,
    setreadstate: setreadstate
}
)(IndexPage)