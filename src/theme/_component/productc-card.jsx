import React from "react";
import PropTypes from 'prop-types';
import "./_style.css";
import {Button} from "react-bootstrap";

class ProductCard extends React.Component {
    render() {
        const {id, title, image, price} = this.props.product;

        return <div className="col item d-flex flex-column align-items-center">
            <div className="cake-img">
                <img src={process.env.PUBLIC_URL + image} alt={title}></img>
            </div>
            <div className="desc">
                <h3>{title}</h3>
                <p className={'price'}>{price}</p>
                <p>
                    <Button
                        onClick={() => this.props.handleOnClick({id, title, image, price})} variant="danger">Add to
                        Cart</Button>
                </p>
            </div>
        </div>;
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard;
