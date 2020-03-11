import React, { Component } from 'react'

export class Shoes extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-3">SHOES</h3>
                <div className="row">
                    {this.props.shoes.map(shoe => (
                    <div className="col-md-3">
                        <div className="card mt-3" key={shoe.id} {...shoe}>
                            <img className="card-img-top" src={shoe.img} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    {shoe.title}
                                </h4>
                                <p className="card-text">
                                    {shoe.price} Bath
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

export default Shoes
