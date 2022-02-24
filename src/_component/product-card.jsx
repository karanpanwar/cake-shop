import React from "react";
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import "./_style.css";
import Dialog from "./dialog";

class ProductCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isProductView: false,
        }
    }

    closeModal = () => {
        this.setState({isProductView: false});
    }

    render() {
        const {id, title, image, price} = this.props.product;

        return (<>
            <div className="col item d-flex flex-column align-items-center">
                <div className="product" onClick={() => this.setState({isProductView: true})}>
                    <div className="cake-img">
                        <img src={process.env.PUBLIC_URL + image} alt={title}></img>
                    </div>
                    <div className="desc">
                        <h3>{title}</h3>
                        <p className={'price'}>&#8377; {price}</p>
                    </div>
                </div>
                <Button style={{width: '272px'}} onClick={() => this.props.handleOnClick({id, title, price, qty: "1"})}
                        variant="danger">
                    Add to Cart
                </Button>
            </div>
            {
                this.state.isProductView &&
                <Dialog
                    title="Product View"
                    buttons={[
                        {onClick: this.closeModal, variant: 'secondary', text: "Close"},
                    ]}
                    modalProps={{
                        show: this.state.isProductView,
                        onHide: this.closeModal,
                        size: "lg",
                    }}
                >
                    <div className="col item d-flex flex-column align-items-center">
                        <div className="product" onClick={() => this.setState({isProductView: true})}>
                            <div className="cake-img">
                                <img src={process.env.PUBLIC_URL + image} alt={title}></img>
                            </div>
                            <div className="desc">
                                <h3>{title}</h3>
                                <p className={'price'}>&#8377; {price}</p>
                            </div>
                        </div>
                        <Button style={{width: '272px'}}
                                onClick={() => this.props.handleOnClick({id, title, price, qty: "1"})}
                                variant="danger">
                            Add to Cart
                        </Button>
                    </div>
                </Dialog>
            }
        </>);
    }
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard;
