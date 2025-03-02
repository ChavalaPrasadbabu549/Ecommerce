
import React from 'react'
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import '../../../styles/user.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import flash from '../../../assets/flash-image.svg'
import Categorymenu from './Category_menu';

//category data
const categoriesData = {
    "All Categories": [
        {
            name: "Computer & Laptop",
            subcategories: [
                {
                    name: "Computer Accessories",
                    products: ["Keyboards", "Mouse", "USB Drives", "External Hard Disks"]
                },
                {
                    name: "SmartPhone",
                    products: ["iPhone", "Samsung", "OnePlus", "Xiaomi"]
                },
                {
                    name: "Headphone",
                    products: ["Bluetooth Headphones", "Wired Headphones", "Gaming Headsets"]
                }
            ]
        },
        {
            name: "Mobile Accessories",
            subcategories: [
                {
                    name: "Chargers",
                    products: ["Fast Chargers", "Wireless Chargers", "Car Chargers"]
                },
                {
                    name: "Cables & Adapters",
                    products: ["USB-C Cables", "Lightning Cables", "HDMI Adapters"]
                }
            ]
        },
        {
            name: "Gaming Console",
            subcategories: [
                {
                    name: "Consoles",
                    products: ["PlayStation", "Xbox", "Nintendo Switch"]
                },
                {
                    name: "Gaming Accessories",
                    products: ["Controllers", "VR Headsets", "Gaming Chairs"]
                }
            ]
        },
        {
            name: "Camera & Photo",
            subcategories: [
                {
                    name: "Cameras",
                    products: ["DSLR", "Mirrorless", "Action Cameras"]
                },
                {
                    name: "Lenses",
                    products: ["Wide Angle", "Telephoto", "Macro"]
                }
            ]
        },
        {
            name: "TV & Home Appliances",
            subcategories: [
                {
                    name: "Televisions",
                    products: ["Smart TVs", "OLED TVs", "4K UHD TVs"]
                },
                {
                    name: "Home Appliances",
                    products: ["Air Conditioners", "Washing Machines", "Microwave Ovens"]
                }
            ]
        },
        {
            name: "Watches & Accessories",
            subcategories: [
                {
                    name: "Men's Watches",
                    products: ["Analog Watches", "Smartwatches", "Digital Watches"]
                },
                {
                    name: "Women's Watches",
                    products: ["Fashion Watches", "Luxury Watches", "Smartwatches"]
                }
            ]
        },
        {
            name: "GPS & Navigation",
            subcategories: [
                {
                    name: "Car GPS",
                    products: ["Garmin", "TomTom", "Google Maps Devices"]
                },
                {
                    name: "Smart Trackers",
                    products: ["Apple AirTag", "Tile Trackers", "Samsung SmartTag"]
                }
            ]
        },
        {
            name: "Wearable Technology",
            subcategories: [
                {
                    name: "Smartwatches",
                    products: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit"]
                },
                {
                    name: "Fitness Trackers",
                    products: ["Fitbit", "Garmin", "Xiaomi Mi Band"]
                }
            ]
        }
    ],
    "Premium Fruits": [
        {
            name: "Imported Fruits",
            products: ["Kiwi", "Blueberries", "Dragon Fruit", "Avocado"]
        },
        {
            name: "Seasonal Fruits",
            products: ["Mangoes", "Watermelon", "Oranges", "Grapes"]
        }
    ],
    "Home & Kitchen": [
        {
            name: "Cookware",
            products: ["Frying Pan", "Pressure Cooker", "Non-stick Tawa"]
        },
        {
            name: "Storage & Containers",
            products: ["Glass Jars", "Plastic Containers", "Lunch Boxes"]
        }
    ],
    "Fashion": [
        {
            name: "Men's Clothing",
            products: ["T-Shirts", "Jeans", "Jackets", "Shoes"]
        },
        {
            name: "Women's Clothing",
            products: ["Dresses", "Sarees", "Tops", "Heels"]
        }
    ],
    "Electronics": [
        {
            name: "Mobiles",
            products: ["iPhone 14", "Samsung Galaxy S23", "OnePlus Nord"]
        },
        {
            name: "Laptops",
            products: ["MacBook Pro", "Dell XPS 13", "HP Pavilion"]
        }
    ],
    "Beauty": [
        {
            name: "Skincare",
            products: ["Face Wash", "Moisturizer", "Sunscreen"]
        },
        {
            name: "Makeup",
            products: ["Lipstick", "Foundation", "Eyeliner"]
        }
    ],
    "Home Improvement": [
        {
            name: "Furniture",
            products: ["Sofa", "Dining Table", "Wardrobe"]
        },
        {
            name: "Lighting",
            products: ["LED Bulbs", "Chandeliers", "Lamps"]
        }
    ],
    "Sports, Toys & Luggage": [
        {
            name: "Sports Equipment",
            products: ["Cricket Bat", "Football", "Tennis Racket"]
        },
        {
            name: "Kids Toys",
            products: ["Action Figures", "Remote Cars", "Dolls"]
        }
    ]
};

const Header = () => {


    return (
        <>
            <section className='header'>
                <div className="top-bar">
                    <Container maxWidth="xl">
                        <div className="top-bar-content">
                            <Typography variant='h5'>Welcome to worldwide Megamart!</Typography>
                            <List>
                                <ListItem>Deliver to 423651</ListItem>
                                <hr className="MuiDivider-root"></hr>
                                <ListItem>Track your order</ListItem>
                                <hr className="MuiDivider-root"></hr>
                                <ListItem>All Offers</ListItem>
                            </List>
                        </div>
                    </Container>
                </div>
                <div className="main-header">
                    <Container maxWidth="xl">
                        <div className='main-header-content'>
                            <div className="main-header-left">
                                <button className="menu-button">☰</button>
                                <Typography variant='h1'>UNITED DEALS</Typography>
                                <img src={flash} alt="flash" />
                            </div>

                            <div className="search-bar">
                                <SearchIcon />
                                <input
                                    type="search"
                                    placeholder="Search essentials, groceries and more..."
                                    className="search-input"
                                />
                            </div>
                            <div className="account-section">
                                <List>
                                    <Link to="">
                                        <ListItem>
                                            <AccountCircleIcon />
                                            <Typography><strong>prasad</strong></Typography>
                                        </ListItem>
                                    </Link>
                                    <hr className="MuiDivider-root"></hr>
                                    <Link to="">
                                        <ListItem>
                                            <AddShoppingCartIcon />
                                            <Typography>Cart<sub>0</sub></Typography>
                                        </ListItem>
                                    </Link>
                                </List>
                            </div>
                        </div>
                    </Container>
                </div>

                <div div className="nav-categories" >
                    <Container maxWidth="xl">
                        <Categorymenu categoriesData={categoriesData} />
                    </Container>
                </div>
            </section >
        </>
    )
}

export default Header