import React from "react";
import {connect} from "react-redux";
import "./shop.css";
import ProductCard from "../../_component/product-card";
import {addProduct} from "../../redux/action";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.products = [
            {
                id: 1,
                title: 'Black Forest Cake',
                price: '599',
                image: '/product/black-forest-cake.jpg'
            },
            {
                id: 2,
                title: 'Choco Pineapple Cake',
                price: '799',
                image: '/product/choco-coin-pineapple-cake.jpg'
            },
            {
                id: 3,
                title: 'Crunchy Choco Cake',
                price: '669',
                image: '/product/crunchy_choco_cake.jpg'
            },
            {
                id: 4,
                title: 'Doremon Cake',
                price: '899',
                image: '/product/doremon-cake-1299_1.jpg'
            },
            {
                id: 5,
                title: 'Happy Birthday Cake',
                price: '501',
                image: '/product/happy_birthday_cake.jpg'
            },
            {
                id: 6,
                title: 'Heart Cake',
                price: '1199',
                image: '/product/heart-cake.jpg'
            },
            {
                id: 7,
                title: 'Heart Shaped Cake',
                price: '1599',
                image: '/product/heart-shaped-cake.jpg'
            },
            {
                id: 8,
                title: 'Oreo Cake',
                price: '799',
                image: '/product/oreo-cake-1kg.jpg'
            },
            {
                id: 9,
                title: 'Stunning Barbie Doll Cake',
                price: '2199',
                image: '/product/stunning-barbie-doll-cake.jpg'
            }
        ];

    }

    handleOnClick = product => {
        this.props.addProduct(product)
    }

    render() {
        return (

            <div className={"container"}>
                <div className="row justify-content-center">
                    {this.products.map((product, index) => <ProductCard key={index}
                                                                        handleOnClick={() => this.handleOnClick(product)}
                                                                        product={product}/>)}
                </div>
            </div>
        );
    }
}

export default connect(null, {addProduct})(Shop);
