import React from 'react'
import CustomTypography from './CustomTypography'

const CategoryCard = ({category}) => {
    return (
        <div className='category-list'>
            <div className='category-box'
                onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid #008ECC')}
                onMouseLeave={(e) => (e.currentTarget.style.border = '2px solid #F5F5F5')}
            >
                <img
                    src={category.img}
                    alt={category.name}
                />
            </div>
            <CustomTypography label={category.name} variant="body1" className="category-list-body1" />
        </div>
    )
}

export default CategoryCard
