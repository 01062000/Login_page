import React, {useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PersonIcon from '@material-ui/icons/Person';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const Signin = () =>{

    const [data, setData] = useState({
        "email" : "",
        "password" : ""
    })

    const InputEvent = (event) => {
        //console.log(event.target.value)
        const { name, value } = event.target;
        setData((previous) => {
            return {
                ...previous,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(`${data.email}` === ""  || `${data.password}` === "" ){
            alert("please fill all the data !!!");
        }else{
            alert(` hellow ${data.email} Login successfull :) `);
        }
    }


    return(
        <>

        <div className="container">
            <div className="row w-100 d-flex justify-content-center align-items-center main_div">
                <div className="col-12 col-lg-7 col-md-8 col-xxl-5 center_div">  
                    <div className="card py-3 px-2">
                        <p className="text-center my-3 text-capitalize"><span>connect with us</span></p>
                        <div className="row mx-auto">
        
                            <div className="col-4">
                                <Tooltip title="Facebook">
                                <a href="#" target="_rohit"><i className="icons facebook"><FacebookIcon/></i></a>
                                </Tooltip>
                            </div>

                            <div className="col-4">
                                <Tooltip title="Instagram">   
                                <a href="#" target="_rohit"><i className="icons instagram"><InstagramIcon/></i></a>
                                </Tooltip>
                            </div>

                            <div className="col-4">
                                <Tooltip title="Twitter">
                                <a href="#" target="_rohit"><i className="icons twitter"><TwitterIcon/></i></a>
                                </Tooltip>
                            </div>

                        </div>

                        <div className="division">
                            <div className="row">
                                <div className="col-6 mx-auto mb-2">
                                    <span className="main_heading">  
                                        <NavLink aria-current="page" exact activeClassName = "active" className="heading" to="/">
                                            Login
                                        </NavLink>  
                                        <i className="swap"><SwapHorizIcon/></i> 
                                        <NavLink aria-current="page" activeClassName = "active" className="default heading" to="/Signup">
                                            Signup
                                        </NavLink>
                                    </span>
                                </div>
                            </div>

                            <form className="myform" onSubmit = {formSubmit}>
                                <div className="mb-3">
                                    <Tooltip title="Registered Email">
                                    <input type="email"
                                        autoComplete="off"
                                        className="form-control" 
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        name = "email"
                                        value = {data.email}
                                        onChange = {InputEvent}
                                     />
                                    </Tooltip>
                                </div>

                                <div className="mb-3">
                                    <Tooltip title="password">
                                        <input type="password"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="password"
                                            name = "password"
                                            value = {data.password}
                                            onChange = {InputEvent}
                                        />
                                    </Tooltip>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-12 text-left">
                                        <label className = "remember">
                                            <input type="checkbox" />
                                            <span>Remember Me</span>
                                        </label>
                                    </div>
                                    <div className="col-md-6 col-12 register text-right">
                                            <Link to = "/Signup" className = "click">Register here</Link>
                                    </div>
                                </div>

                                <div className="my-3">
                                    <Button type="submit" variant="contained"  className=" buttun btn btn-primary btn-lg btn-block">
                                        <small><i class="user pr-2"><PersonIcon/></i>Login</small>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};


export default Signin;