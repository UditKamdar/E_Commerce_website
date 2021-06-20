import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import HomeCategories from '../components/Layout/components/HomeCategories/HomeCategories'
import styles from '../styles/Home.module.css'
import Category from '../components/Layout/components/Category/Category'
import PageName from '../components/Layout/components/PageName/PageName'
import { useRouter } from "next/router"
import { t3 } from '../services/UserService'
import axios from 'axios'


// export async function getServerSideProps(context){
//     const a =  context.query;
//     {console.log(context)}
//  {console.log(a);}


//     return {
//         props : { ...a }
//     }
// }

export default function blog() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            try {
                console.log("HIII")
                const { data } = await axios.get('/api/fruits');
                console.log(data);
                console.log("Working udit")
                setProducts(data);
            } catch (err) {
                console.log(" not Working udit")
            }
        };
        fecthData();
    }, []);
    return (
        <>
        
            {products.map((product) => (<h5>{product.name} </h5>
            ))}
            <Category />
            <PageName t="Blog" />

        </>
    )
}

