import React from 'react'

import '../../style/login.css'

export default class index extends React.Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <div class="login-main-text">
                        <h2>Application<br/> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div class="main">
                    <div class="col-md-6 col-sm-12">
                        <div class="login-form">
                            <form>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" placeholder="Email"></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password"></input>
                                </div>
                                <button type="submit" class="btn btn-black">Login</button>
                                <button type="submit" class="btn btn-secondary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
