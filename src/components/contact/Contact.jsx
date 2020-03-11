import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="text-uppercase mt-3" align="center">Contact</h1>
                <div className="row">
                    <div className="col-md-12">
                        <h4 align="center">We can't solve your problem if you don't tell us about it!</h4>
                    </div>
                    <div className="col-md-6">
                        <div className="card mt-3 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-center"><i class="fas fa-map-marker-alt"></i> Bangkok, Thailand</h5>
                                <h5 className="card-title text-center"><i class="fas fa-phone"></i> 087-3243-929</h5>
                                <h5 className="card-title text-center"><i class="far fa-envelope"></i> krishanathep@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mt-3">
                            <div className="card-body">
                               <form>
                                   <div className="form-group">
                                        <div className="label">Name</div>
                                        <input type="text" className="form-control" placeholder="Name..." />   
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Email</div>
                                        <input type="text" className="form-control" placeholder="Email..." />   
                                    </div>
                                    <div className="form-group">
                                        <div className="label">Message</div>
                                        <textarea className="form-control" cols="30" rows="5" placeholder="Message..." />  
                                    </div>  
                                    <div className="btn btn-success btn-block">SEND</div> 
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
