import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';

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
                                        {category.subcategories &&
                                            category.subcategories.map((sub, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="subcategory-item"
                                                    onMouseEnter={() => setHoveredSubcategory(sub.name)}
                                                    onMouseLeave={() => setHoveredSubcategory(null)}
                                                >
                                                    {sub.name} {sub.name === hoveredSubcategory ? <ChevronRightIcon /> : null}
                                                    {hoveredSubcategory === sub.name && (
                                                        <div className="products-dropdown">
                                                            {sub.products.map((product, prodIndex) => (
                                                                <div key={prodIndex} className="product-item">
                                                                    <Typography>{product}</Typography>
                                                                </div>
                                                            ))}
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
