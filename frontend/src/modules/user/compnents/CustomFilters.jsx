import React, { useState } from 'react';
import {
  Typography, Slider, Chip, Grid, Box, Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomAccordion from '../compnents/CustomAccordion';
import CustomCheckbox from '../compnents/CustomCheckbox';
import CustomBox from '../compnents/CustomBox';
import CustomSelect from '../compnents/CustomSelect';
import CustomTypography from '../compnents/CustomTypography';
import CustomButton from './CustomButton';
import CustomTextField from './CustomTextField';

const allBrands = ['Samsung', 'Nike', 'Reebok', 'Zara', 'Gearo', 'Indi', 'Ari', 'Lulu', 'Beast'];

const priceMinOptions = [
  { label: '₹0', value: 0 },
  { label: '₹5,000', value: 5000 },
  { label: '₹10,000', value: 10000 },
  { label: '₹15,000', value: 15000 },
];

const priceMaxOptions = [
  { label: "₹10,000", value: 10000 },
  { label: "₹20,000", value: 20000 },
  { label: "₹30,000+", value: 30000 },
];

const CustomFilters = () => {
  const [expandedAccordions, setExpandedAccordions] = useState({
    size: true,
    brand: false,
    discount: false,
    availability: false
  });

  const toggleAccordion = (key) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandSearch, setBrandSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Handle brand selection
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(item => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Clear all filters
  const handleClearAll = () => {
    setSelectedBrands([]);
    setPriceRange([0, 30000]);
    setMinPrice('');
    setMaxPrice('');
  };

  // Price slider change
  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  // Filter brands list based on search input
  const filteredBrands = allBrands.filter(brand =>
    brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <CustomBox className="custom-filter-main">
      <CustomBox className="custom-filter-header">
        <CustomTypography variant="body2" className="product-price-body2" label="Filters" />
        <CustomButton onClick={handleClearAll} size="small" label="Clear All" className="custom-filter-btn" />
      </CustomBox>
      <>
        {selectedBrands.length > 0 && (
          <CustomBox className="filter-category">
            <Grid container spacing={1}>
              {selectedBrands.map((brand, index) => (
                <Grid item key={index}>
                  <Chip
                    label={brand}
                    onDelete={() => handleBrandChange(brand)}
                    color="primary"
                    variant="outlined"
                  />
                </Grid>
              ))}
            </Grid>
          </CustomBox>
        )}
      </>

      {/* active category 
      <CustomBox className="filter-category">
        <Typography variant="subtitle2" gutterBottom>Categories</Typography>
        <Typography variant="body1"><b>Fashion</b></Typography>
        <Typography variant="body2" color="textSecondary">Top Wear</Typography>
      </CustomBox> */}
      <Divider />
      <CustomBox className="filter-category">
        <CustomTypography variant="body2" className="product-price-body2" label="Price" sx={{ marginBottom: "10px" }} />
        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={30000}
        />
        <CustomBox className="categories-content">
          <Box sx={{ flex: 1 }}>
            <CustomSelect
              size="small"
              label="Min Price"
              placeholder="Min"
              option={minPrice}
              setoption={setMinPrice}
              options={priceMinOptions}
              showLabelAbove={false}
              IconComponent={KeyboardArrowDownIcon}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <CustomSelect
              size="small"
              label="Max Price"
              placeholder="Max"
              option={maxPrice}
              setoption={setMaxPrice}
              options={priceMaxOptions}
              showLabelAbove={false}
              IconComponent={KeyboardArrowDownIcon}
            />
          </Box>
        </CustomBox>
      </CustomBox>
      <Divider />
      <CustomAccordion
        title="Size"
        defaultExpanded={expandedAccordions.size}
        expandIcon={expandedAccordions.size ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('size')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Small" />
            <CustomCheckbox type="checkbox" label="Medium" />
            <CustomCheckbox type="checkbox" label="Large" />
            <CustomCheckbox type="checkbox" label="XL" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Brand"
        defaultExpanded={expandedAccordions.brand}
        expandIcon={expandedAccordions.brand ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('brand')}
        detailsContent={
          <>
            <CustomTextField
              variant="outlined"
              size="small"
              placeholder="Search Brand"
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              style={{ marginBottom: '0.5rem' }}
            />
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand, index) => (
                <CustomCheckbox
                  key={index}
                  label={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
              ))
            ) : (
              <Typography variant="body2" color="textSecondary">No brand</Typography>
            )}
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Discount"
        defaultExpanded={expandedAccordions.discount}
        expandIcon={expandedAccordions.discount ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('discount')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="10% and above" />
            <CustomCheckbox type="checkbox" label="20% and above" />
            <CustomCheckbox type="checkbox" label="30% and above" />
            <CustomCheckbox type="checkbox" label="40% and above" />
            <CustomCheckbox type="checkbox" label="50% and above" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Availability"
        defaultExpanded={expandedAccordions.availability}
        expandIcon={expandedAccordions.availability ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('availability')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="In Stock" />
            <CustomCheckbox type="checkbox" label="Out of Stock" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Rating"
        defaultExpanded={expandedAccordions.rating}
        expandIcon={expandedAccordions.rating ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('rating')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="4 Stars & Above" />
            <CustomCheckbox type="checkbox" label="3 Stars & Above" />
            <CustomCheckbox type="checkbox" label="2 Stars & Above" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Color"
        defaultExpanded={expandedAccordions.color}
        expandIcon={expandedAccordions.color ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('color')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Red" />
            <CustomCheckbox type="checkbox" label="Blue" />
            <CustomCheckbox type="checkbox" label="Black" />
            <CustomCheckbox type="checkbox" label="White" />
            <CustomCheckbox type="checkbox" label="Green" />
            <CustomCheckbox type="checkbox" label="Pink" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Offers"
        defaultExpanded={expandedAccordions.offers}
        expandIcon={expandedAccordions.offers ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('offers')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Bank Offers" />
            <CustomCheckbox type="checkbox" label="No Cost EMI" />
            <CustomCheckbox type="checkbox" label="Free Shipping" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Product Type"
        defaultExpanded={expandedAccordions.productType}
        expandIcon={expandedAccordions.productType ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('productType')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Smartphones" />
            <CustomCheckbox type="checkbox" label="Laptops" />
            <CustomCheckbox type="checkbox" label="Tablets" />
            <CustomCheckbox type="checkbox" label="Watches" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Shipping Options"
        defaultExpanded={expandedAccordions.shipping}
        expandIcon={expandedAccordions.shipping ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('shipping')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Free Delivery" />
            <CustomCheckbox type="checkbox" label="Cash on Delivery" />
            <CustomCheckbox type="checkbox" label="Express Delivery" />
          </>
        }
      />
      <Divider />
      <CustomAccordion
        title="Material"
        defaultExpanded={expandedAccordions.material}
        expandIcon={expandedAccordions.material ? <RemoveIcon /> : <AddIcon />}
        onChange={() => toggleAccordion('material')}
        detailsContent={
          <>
            <CustomCheckbox type="checkbox" label="Cotton" />
            <CustomCheckbox type="checkbox" label="Polyester" />
            <CustomCheckbox type="checkbox" label="Leather" />
            <CustomCheckbox type="checkbox" label="Wood" />
          </>
        }
      />

    </CustomBox>
  );
};

export default CustomFilters;
