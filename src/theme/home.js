import React from "react";
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

class Home extends React.Component {
    render() {
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
                                    <NavLink to="/" className={'nav-link'} exact>Home</NavLink>
                                    <NavLink to="/shop" className={'nav-link'}>Shop</NavLink>
                                </Nav>
                                <Button variant="light">
                                    <span className="badge badge-pill badge-danger mr-2">
                                        5
                                    </span> Cart
                                </Button>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <Switch>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route exact path="/">
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
            </>
        );
    }
}

export default Home;
