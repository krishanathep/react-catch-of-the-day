import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase";

export class Signup extends Component {
    constructor() {
        super() 

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("password don't match!")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({[name]: value})
    }
  
render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="Sign Up">
        <div className="card mt-3">
          <div className="card-body">
            <h3 className="card-title">I do not have a account</h3>
            <p className="card-text">Sign up with your email and password</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="label">Display Name</div>
                <input
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Display Name..."
                  required
                />
              </div>
              <div className="form-group">
                <div className="label">Email</div>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Email..."
                  required
                />
              </div>
              <div className="form-group">
                <div className="label">Password</div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Password..."
                  required
                />
              </div>
              <div className="form-group">
                <div className="label">Confirm Password</div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Confirm Password..."
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-block">
                  <i class="far fa-envelope"></i> SIGN UP WITH EMAIL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
