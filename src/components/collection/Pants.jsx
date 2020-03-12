import React, { Component } from 'react'

export class Pants extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-3">PANTS</h3>
                <div className="row">
                    {this.props.pants.map(pant => (
                    <div className="col-md-3 col-6">
                        <div className="card mt-3" key={pant.id} {...pant}>
                            <img className="card-img-top" src={pant.img} alt="" height="350px"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    {pant.title}
                                </h4>
                                <p className="card-text">
                                    {pant.price} Bath
                                </p>
                                <button className="btn btn-primary btn-block">
                                    <i class="fas fa-cart-plus"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pants
