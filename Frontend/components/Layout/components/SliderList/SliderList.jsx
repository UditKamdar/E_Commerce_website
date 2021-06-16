import React from 'react'
import Link from 'next/link'
import { t1,t2 } from '../../../../services/UserService'
// export async function t1() {
//     const response = await fetch('/api/hello');
//     console.log(response);
//     return await response.json();
// }
export default function SliderList() {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/fruits.jpg">
                                <h5><a>Fresh Fruit</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/dryfruit.jpg">
                                <h5><Link href= "/"><a>Dry Fruit</a></Link></h5>
                                

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/vegetables.jpg">
                                <h5><Link href="http://localhost:3080/api/hello"><a>Vegetables</a></Link></h5>
                                
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/flours.jpeg">
                                <h5><a href="#">Flours</a></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/pulses.jpg">
                                <h5><Link href="http://localhost:3080/api/hello"><a >Pulses</a></Link></h5>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories__item set-bg" data-setbg="img/categories/spices.jpg">
                                <h5><a href="#">Spices</a></h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
