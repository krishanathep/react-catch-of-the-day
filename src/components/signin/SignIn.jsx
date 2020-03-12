import React, { Component } from 'react'

export class SignIn extends Component {
    render() {
        return (
            <div>
                <h1 className="text-uppercase" align="center">Sign In</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mt-3">
                            <div className="card-body">
                                <h3 className="card-title">I already have an account</h3>
                                <p className="card-text">Sign in with your email and password</p>
                                <form>
                                    <div className="form-group">
                                        <div className="label">Email</div>
                                        <input type="text" className="form-control" placeholder="Email..."/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Password</div>
                                        <input type="password" className="form-control" placeholder="Password..."/>
                                    </div>
                                    <div className="float-right">
                                        <input type="submit" className="btn btn-success" value="SIGN IN"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mt-3">
                            <div className="card-body">
                                <h3 className="card-title">I do not have a account</h3>
                                <p className="card-text">Sign up with your email and password</p>
                                <form>
                                    <div className="form-group">
                                        <div className="label">Display Name</div>
                                        <input type="text" className="form-control" placeholder="Display Name..."/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Email</div>
                                        <input type="text" className="form-control" placeholder="Email..."/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Password</div>
                                        <input type="password" className="form-control" placeholder="Password..."/>
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Confirm Password</div>
                                        <input type="password" className="form-control" placeholder="Confirm Password..."/>
                                    </div>
                                    <div className="float-right">
                                        <input type="submit" className="btn btn-success" value="SIGN UP"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
