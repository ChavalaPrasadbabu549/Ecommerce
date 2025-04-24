import React from 'react'
import Banner from '../../user/compnents/Banner'
import Features from '../../user/compnents/Features'
import Topcategories from '../compnents/Top_categories';
import deliver_icon from '../../../assets/Package.svg';
import tropy_icon from '../../../assets/Trophy.svg';
import creditcard_icon from "../../../assets/CreditCard.svg";
import headphones_icon from '../../../assets/Headphones.svg';
import grocery from '../../../assets/grocery.svg';

const Home = () => {
    const categories = [
        { name: 'Mobile', img: grocery },
        { name: 'Cosmetics', img: grocery },
        { name: 'Electronics', img: grocery },
        { name: 'Furniture', img: grocery },
        { name: 'Watches', img: grocery },
        { name: 'Decor', img: grocery },
    ];
    const featureData = [
        {
            title: "FASTED DELIVERY",
            subtitle: "Delivery in 24/H",
            icon: deliver_icon
        },
        {
            title: "24 HOURS RETURN",
            subtitle: "100% money-back guarantee",
            icon: tropy_icon
        },
        {
            title: "SECURE PAYMENT",
            subtitle: "Your money is safe",
            icon: creditcard_icon
        },
        {
            title: "SUPPORT 24/7",
            subtitle: "Live contact/message",
            icon: headphones_icon
        },
    ];



    return (
        <>
            <Banner />
            <Features featureData={featureData} />
            <Topcategories categories={categories} />
        </>
    )
}

export default Home