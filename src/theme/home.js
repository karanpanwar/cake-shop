import React from "react";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button"
import "./home.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Homepage from "./homepage/homepage";
import Shop from "./shop/shop";
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import GridView from "../_component/grid-view";
import Dialog from "../_component/dialog";
import {getProductsList} from "../redux/selecter";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            isCartOpen: false,
        }
        this.homePath = (process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  '/' : '/cake-shop/';
    }

    closeCartModal = () => {
        this.setState({isCartOpen: false});
    }

    render() {
        console.log(this.homePath);
        return (
            <>
                <div className="container d-flex flex-row justify-content-between header">
                    <div className="item address res">
                        <span className="location"></span> 523 C Road, Sardarpura Jaipur,
                        Rajasthan
                    </div>
                    <div className="item title">Sweet Bakery</div>
                    <div className="item res">
                        <span className="button">Get in Touch</span>
                    </div>
                </div>
                <div className="nav-bar-border">
                    <div className="container">
                        <Navbar collapseOnSelect expand="sm">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink to={this.homePath} className={'nav-link'} exact>Home</NavLink>
                                    <NavLink to={`${this.homePath}/shop`} className={'nav-link'}>Shop</NavLink>
                                </Nav>
                                <Button variant="light" onClick={() => this.setState({isCartOpen: !this.state.isCartOpen})}>
                                    <span className="badge badge-pill badge-danger mr-2">
                                        {this.props.productsList.length}
                                    </span> Cart
                                </Button>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <Switch>
                    <Route path={`${this.homePath}/shop`}>
                        <Shop/>
                    </Route>
                    <Route exact path={this.homePath}>
                        <Homepage/>
                    </Route>
                </Switch>
                <div className={"footer"}>
                    <div className="container">
                        <hr/>
                        <div className={"footer-tag d-flex justify-content-centre"}>
                            <p>best cake &copy;2020 Privacy policy</p>
                            <p className={"ml-auto"}>Developed By Karan.</p>
                        </div>
                    </div>
                </div>
                {
                    this.state.isCartOpen &&
                    <Dialog
                        title="Cart"
                        buttons={[
                            {onClick: this.closeCartModal, variant: 'secondary', text: "Close"},
                        ]}
                        modalProps={{
                            show: this.state.isCartOpen,
                            onHide: this.closeCartModal,
                            size: "xl",
                        }}
                    >
                        <GridView
                            columns={[
                                {label: "Product", key: "title"},
                                {label: "Price", key: "price"},
                                {label: "Quantity", key: "qty"}
                            ]}
                            data={this.props.productsList}
                        />
                    </Dialog>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const productsList = getProductsList(state);
    return {productsList};
}

export default connect(mapStateToProps)(Home);
