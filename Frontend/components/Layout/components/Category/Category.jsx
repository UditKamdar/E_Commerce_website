import React from 'react';

const Categories = () => {
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars" />
                                <span>All departments</span>
                            </div>
                            <ul>
                            <li><a href="#">Fruits</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Dry Fruits</a></li>
                                <li><a href="#">Flours</a></li>
                                <li><a href="#">Pulses</a></li>
                                <li><a href="#">Spices</a></li>
                                {/* <li><a href="#">Papayaya &amp; Crisps</a></li> */}
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                <span className="arrow_carrot-down" />
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Categories;
