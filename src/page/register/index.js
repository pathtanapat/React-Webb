import React from 'react'
import '../../style/register.css'

export default class register extends React.Component {
    render() {
        return (
            <div>
                <div class="sidenav">
                    <div class="login-main-text">
                        <h2>Application<br/> Register Page</h2>
                        <p>Creact for User.</p>
                    </div>
                </div>
                <div class="main">
                    <div class="col-md-6 col-sm-12">
                        <div class="login-form">
                            <form>
                                <div class="form-group">
                                    <label>Frist Name</label>
                                    <input type="text" class="form-control" placeholder="Frist Name"></input>
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name"></input>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" placeholder="Email"></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password"></input>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password"></input>
                                </div>
                                <button type="submit" class="btn btn-black">Register</button>
                                <button type="submit" class="btn btn-secondary">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
