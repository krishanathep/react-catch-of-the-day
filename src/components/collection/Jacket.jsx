import React, { Component } from 'react'

export class Jacket extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-3">JACKET</h3>
                <div className="row">
                    {this.props.jackets.map(jacket => (
                    <div className="col-md-3">
                        <div className="card mt-3" key={jacket.id} {...jacket}>
                        <img className="card-img-top" src={jacket.img} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    {jacket.title}
                                </h4>
                                <p className="card-text">
                                    {jacket.price} Bath
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

export default Jacket
