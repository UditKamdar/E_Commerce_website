import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import HomeCategories from '../components/Layout/components/HomeCategories/HomeCategories'
import styles from '../styles/Home.module.css'
import Category from '../components/Layout/components/Category/Category'
import PageName from '../components/Layout/components/PageName/PageName'
import { t1, t2 } from '../services/UserService'
export default function contact() {
    // const [products, setProducts] = useState([]);
    // const a = t2();
    // useEffect(() => {
    //     setProducts(a);
    // }, [])
    return (
        <>
            {/* {products} */}
            <Category />
            <PageName t="Contact Us" />


            <div>
                <section className="contact spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_phone" />
                                    <h4>Phone</h4>
                                    <p>+01-3-8888-6868</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_pin_alt" />
                                    <h4>Address</h4>
                                    <p>60-49 Road 11378 New York</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_clock_alt" />
                                    <h4>Open time</h4>
                                    <p>10:00 am to 23:00 pm</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                                <div className="contact__widget">
                                    <span className="icon_mail_alt" />
                                    <h4>Email</h4>
                                    <p><a href="https://preview.colorlib.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f69e939a9a99b695999a99849a9f94d895999b">[email&nbsp;protected]</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="map">
                    <iframe src="https://www.google.com/maps/@22.2885032,70.7763168,15z" height={500} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    <div className="map-inside">
                        <i className="icon_pin" />
                        <div className="inside-widget">
                            <h4>New York</h4>
                            <ul>
                                <li>Phone: +12-345-6789</li>
                                <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Leave Message</h2>
                                </div>
                            </div>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <textarea placeholder="Your message" defaultValue={""} />
                                    <button type="submit" className="site-btn">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

