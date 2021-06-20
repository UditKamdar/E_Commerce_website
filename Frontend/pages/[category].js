import { useState, useEffect } from "react";
import axios from 'axios'
import Category from '../components/Layout/components/Category/Category'
import PageName from '../components/Layout/components/PageName/PageName'
import Head from 'next/head'
// function getPostDataByName(category) {

//        return categoryname
//     }


// }

export default function products({ category }) {
    // const postData = getPostDataByName(category);
    const [categoryname, setCategoryname] = useState([]);
    const [name, setName] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            try {
                if (category == "flours") {
                    const { data } = await axios.get('/api/flours');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }
                if (category == "fruits") {
                    const { data } = await axios.get('/api/fruits');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }
                if (category == "dryfruit") {
                    const { data } = await axios.get('/api/dryfruit');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }
                if (category == "spices") {
                    const { data } = await axios.get('/api/spices');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }
                if (category == "vegetables") {
                    const { data } = await axios.get('/api/vegetables');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }
                if (category == "pulses") {
                    const { data } = await axios.get('/api/pulses');
                    setCategoryname(data);
                    setName(category);
                    console.log("workignknnkndkndckcn");
                }

                console.log("Working udit")

            } catch (err) {
                console.log(" not Working udit")
            }
        };
        fecthData();
    }, []);

    return (

        <>
             {/* <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Ogani Template" />
                <meta name="keywords" content="Ogani, unica, creative, html" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Udit</title>
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="css/bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css.pagespeed.cc.4YNTZ7I7f2.css" type="text/css" />
                <link rel="stylesheet" href="css/A.bootstrap.min.css%2bfont-awesome.min.css%2belegant-icons.css%2bnice-select.css%2bjquery-ui.min.css%2bowl.carousel.min.css%2bslicknav.min.css%2bstyle.css%2cMcc.4YNTZ7I7f2.css.pagespeed.cf.sbKP" type="text/css" />
                <link rel="stylesheet" href="css/bootstrap.min.css+font-awesome.min.css+elegant-icons.css+nice-select.css+jquery-ui.min.css+owl.carousel.min.css+slicknav.min.css+style.css.pagespeed.cc.4YNTZ7I7f2.css" type="text/css" />

                <script  src="js/jquery-3.3.1.min.js" ></script>
                <script  src="js/bootstrap.min.js%2bjquery.nice-select.min.js.pagespeed.jc.08NHUfMhux.js"></script>
                <script >eval(mod_pagespeed_ND6iIrfFHB);</script>
                <script >eval(mod_pagespeed_2CR7bSFHcL);</script> 

                <script  src="js/jquery.slicknav.js"></script>
                <script  src="js/owl.carousel.min.js"></script>
                <script  src="js/jquery-ui.min.js"></script>
                <script  src="js/main.js"></script>
                <script  src="js/mixitup.min.js"></script>


                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script> 
            </Head>  */}
            <Category />
            <PageName t={name} />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-5">
                            <div className="row">
                                {categoryname.map((product) => (
                                    //             < div>
                                    //   <h5>{product.name} {product.price}</h5>
                                    //   <div classname="product__item__pic set-bg" data-setbg="img/product/{{product.img}}">
                                    //   </div></div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" data-setbg={`/img/product/${product.img}`}>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h5>{product.name}</h5>
                                                <h5>{product.price} Rs/kg</h5>
                                                <h5>Quantity:- {product.quantity}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    );
}
// Post.getInitialProps = async ({ query }) => {

products.getInitialProps = async ({ query }) => {
    const { category } = query;

    return { category };
};