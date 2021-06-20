import React from 'react'
import Link from 'next/link'
import { t1, t2 } from '../../../../services/UserService'
// export async function t1() {
//     const response = await fetch('/api/hello');
//     console.log(response);
//     return await response.json();
// }

const posts = [
    {
        userId: 1,
        name: "fruits",
        img: "fruits.jpg"
    },
    {
        userId: 1,
        name: "dryfruit",
        img: "dryfruit.jpg"
    },
    {
        userId: 1,
        name: "vegetables",
        img: "vegetables.jpg"
    },
    {
        userId: 1,
        name: "flours",
        img: "flours.jpeg"
    },
    {
        userId: 1,
        name: "pulses",
        img: "pulses.jpg"
    },
    {
        userId: 1,
        name: "spices",
        img: "spices.jpg"
    },
]

export default function SliderList() {
    return (
        <section className="categories">
            <div className="container">
            <div className="row">
                        <div className="categories__slider owl-carousel">

                {posts.map((post) => {
                   return(
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" data-setbg={`img/categories/${post.img}`}>
                                    <h5>
                                        <Link href="/[category]" as={"/" + post.name}>
                                            <a>{post.name}</a>
                                        </Link>
                                    </h5>
                              
                        </div>
                    </div>
                   )
                })}



</div>
                            </div>

            </div>
        </section>


    )
}



{/* <div className="col-lg-3">
<div className="categories__item set-bg" data-setbg="img/categories/fruits.jpg">
    <h5><Link href="/products/fruits" as ><a>Fruits</a></Link></h5>
    
</div>
</div>
<div className="col-lg-3">
<div className="categories__item set-bg" data-setbg="img/categories/dryfruit.jpg">
    <h5><Link href= "/products/dryfruit"><a>Dry Fruit</a></Link></h5>
    

</div>
</div>
<div className="col-lg-3">
<div className="categories__item set-bg" data-setbg="img/categories/vegetables.jpg">
    <h5><Link href="/products/vegetables"><a>Vegetables</a></Link></h5>
    
</div>
</div>
<div className="col-lg-3">
<div className="categories__item set-bg" data-setbg="img/categories/flours.jpeg">
    <h5><Link href="/products/flours"><a>Flours</a></Link></h5>
</div>
</div>
<div className="col-lg-3">
<div className="categories__item set-bg" data-setbg="img/categories/pulses.jpg">
    <h5><Link href="/products/pulses"><a>Pulses</a></Link></h5>
</div>
</div>
<div className="col-lg-3"> */}
{/* <div className="categories__item set-bg" data-setbg="img/categories/spices.jpg">
    <h5><Link href="/products/spices"><a>Spices</a></Link></h5>
</div>

</div> */}