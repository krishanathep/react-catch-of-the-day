import React, { Component } from 'react'

export class Shirt extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-3">SHIRT</h3>
                <div className="row">
                    {this.props.shirts.map(shirt => (
                    <div className="col-md-3 col-6">
                        <div className="card mb-3" key={shirt.id} {...shirt}>
                            <img className="card-img-top" src={shirt.img} alt=""/>
                            <div className="card-body">
                                <h4 className="cart-title">
                                    {shirt.title}
                                </h4>
                                <p className="card-text">
                                    {shirt.price} Bath
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

export default Shirt
