import React from "react";
import choco from "../../icons/choco.jpg";
import party from "../../icons/party.jpg";
import wedding from "../../icons/wedding.jpg";
import "./homepage.css";

export default class Homepage extends React.Component {
    render() {
        return (
            <>
                <div className="banner-offer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1>WHAT WE OFFER</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col item d-flex flex-column align-items-center">
                                <div className="cake-img">
                                    <img src={party} alt="cake"></img>
                                </div>
                                <div className="desc">
                                    <h3>Party cupcake</h3>
                                    <p>
                                        We offer variety of cupcake for any party made with high
                                        quality natural ingredients.
                                    </p>
                                </div>
                            </div>
                            <div className="col item d-flex flex-column align-items-center">
                                <div className="cake-img">
                                    <img src={choco} alt="cake"></img>
                                </div>
                                <div className="desc">
                                    <h3>Choco Cake </h3>
                                    <p>
                                        Nothing tastes better than chocolate cake with variety of
                                        flavour. which is always available at our bakery.
                                    </p>
                                </div>
                            </div>
                            <div className="col item d-flex flex-column align-items-center">
                                <div className="cake-img">
                                    <img src={wedding} alt="cake"></img>
                                </div>
                                <div className="desc">
                                    <h3>Wedding Cake</h3>
                                    <p>
                                        want to make your wedding unforgettable than you need to order
                                        unique wedding cake at sweet bakery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
