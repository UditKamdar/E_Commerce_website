import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import SliderList from './components/SliderList/SliderList'

export default function Layout({ children }) {
    return (

        <>
            <div id="preloder">
                <div className="loader" />
            </div>
            <Header />
            {children}
            <Footer />
        </>

    )
}
