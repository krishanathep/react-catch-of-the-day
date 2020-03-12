import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="text-uppercase" align="center">
          Contact
        </h1>
        <div className="row">
          <div className="col-md-12 mt-3">
            <h4 align="center">
              We can't solve your problem if you don't tell us about it!
            </h4>
          </div>
          <div className="col-md-6">
              <div className="card mt-3">
                  <img className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/swiftfirebase-3e9bf.appspot.com/o/my-office.png?alt=media&token=02f3e861-3342-4519-ad4a-a066802e5e9f" alt=""/>
              </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <div className="label">Name</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name..."
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Email</div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email..."
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Message</div>
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="4"
                      placeholder="Message..."
                    />
                  </div>
                  <div className="btn btn-success btn-block">SEND</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
