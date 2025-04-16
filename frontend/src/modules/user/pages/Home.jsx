import React from 'react'
import Banner from '../../user/compnents/Banner'
import Features from '../../user/compnents/Features'
import Topcategories from '../compnents/Top_categories';
import banner from '../../../assets/banner.svg'

const Home = () => {
    const categories = [
        { name: 'Mobile', img: 'https://images.unsplash.com/photo-1600180750707-7bcf9a30c4a9' }, // Mobile Image
        { name: 'Cosmetics', img: 'https://images.unsplash.com/photo-1596033710122-15323d06ba6f' }, // Cosmetics Image
        { name: 'Electronics', img: 'https://images.unsplash.com/photo-1604584705866-8d4c5b4d8a0a' }, // Electronics Image
        { name: 'Furniture', img: 'https://images.unsplash.com/photo-1590987635449-74fe89f745e4' }, // Furniture Image
        { name: 'Watches', img: 'https://images.unsplash.com/photo-1521444981112-0599f5b04c6e' }, // Watches Image
        { name: 'Decor', img: 'https://images.unsplash.com/photo-1526373953463-bf0c4d268a0c' }, // Decor Image
    ];


    return (
        <>
            <Banner />
            <Features />
            <Topcategories categories={categories} />
        </>
    )
}

export default Home