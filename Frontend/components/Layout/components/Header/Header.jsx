import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (

        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope" /> <a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0169646d6d6e41626e6d6e736d68632f626e6c">[email&nbsp;protected]</a></li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/xlanguage.png.pagespeed.ic.x-r7SQqGJF.jpg"  />
                                    <div>English</div>
                                    <span className="arrow_carrot-down" />
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    <a href="#"><i className="fa fa-user" /> Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="index-2.html"><img src="img/xlogo.png.pagespeed.ic.ap5icp--OT.png"  /></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>

                                {/* <li className="active"><a href="/home">Home</a></li> */}
                                <li><Link href="/home" rel="preload"><a >Home</a></Link></li>
                                <li><Link href="/shop-grid"rel="preload"><a >Shop</a></Link></li>
                                <li><a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><Link href="/shop-details" rel="preload"><a>Shop Details</a></Link></li>
                                        <li><Link href="/shopping-cart" rel="preload"><a>Shoping Cart</a></Link></li>
                                        <li><Link href="/checkout" rel="preload"><a>Check Out</a></Link></li>
                                        <li><Link href="/blog-details" rel="preload"><a>Blog Details</a></Link></li>
                                    </ul>
                                </li>
                                <li> <Link href="/blog" rel="preload">
                                    <a>Blog</a>
                                    </Link>
                                </li>
                                <li><Link href="/contact" rel="preload"><a >Contact</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                                <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>

    )
}
