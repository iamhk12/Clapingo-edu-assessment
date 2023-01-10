import React from "react";
import clogo from "./clogo.png"
import "./Login.css"
import Nav from "./Nav"

const Login = () => {
    return (
        <>
            <Nav
                txt="Register"
            />
            <div class="container ">
                <div class="login-box">
                    <div class="user-icon">
                        <img src={clogo} alt="" />

                    </div>
                    <div class="login" id="form">
                        <div class="form-group">
                            <input type="text" name="username" placeholder="Username" id="username" class="form-control" />
                        </div>
                        <div class="form-group">
                            <input type="password" name="pass" placeholder="Password" id="pass" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="rememberme">
                                <input type="checkbox" name="rememberme" id="rememberme" />
                                Remember Password
                            </label>
                        </div>
                        <div class="form-group">
                            <button onClick={() => {
                                alert("User already logged in.");
                                window.location.replace("http://hk12.netlify.com");
                            }}><a href="/login" id="logINlog" >Login</a></button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Login