import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Categorymenu = ({ categoriesData }) => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

    return (
        <div className="mega-menu">
            <div className="categories-list">
                {Object.entries(categoriesData).map(([categoryName, categoryArray]) => (
                    <div
                        key={categoryName}
                        className="category-item"
                        onMouseEnter={() => setHoveredCategory(categoryName)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        {categoryName} {hoveredCategory === categoryName ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

                        {hoveredCategory === categoryName && (
                            <div className="subcategories-dropdown">
                                {categoryArray.map((category, catIndex) => (
                                    <div key={catIndex} className="subcategory-group">
                                        <h4>{category.name}</h4>
                                        {category.subcategories &&
                                            category.subcategories.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="subcategory-item"
                                                    onMouseEnter={() => setHoveredSubcategory(sub.name)}
                                                    onMouseLeave={() => setHoveredSubcategory(null)}
                                                >
                                                    {sub.name} <ChevronRightIcon />
                                                    
                                                    {hoveredSubcategory === sub.name && sub.products.length > 0 && (
                                                        <div className="products-dropdown">
                                                            <h3>FEATURED PRODUCTS</h3>
                                                            {sub.products.map((product, prodIndex) => (
                                                                <div key={prodIndex} className="product-item">
                                                                    <p>{product}</p>
                                                                </div>
                                                            ))}
                                                            <div className="discount-box">
                                                                <h4>21% Discount</h4>
                                                                <p>Escape the noise, it's time to hear the magic with Xiaomi Earbuds.</p>
                                                                <button>Shop Now →</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categorymenu;
