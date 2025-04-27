import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  TextField,
  Slider,
  Button,
  Chip,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const allBrands = ['Samsung', 'Nike', 'Reebok', 'Zara', 'Gearo', 'Indi', 'Ari', 'Lulu', 'Beast'];

const CustomFilters = () => {
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
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}>
      {/* Header with Clear All */}
      <Grid container justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Filters</Typography>
        <Button onClick={handleClearAll} size="small" color="primary">Clear All</Button>
      </Grid>

      {/* Show Selected Filters */}
      {selectedBrands.length > 0 && (
        <Grid container spacing={1} mb={2}>
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
      )}

      {/* Categories (Optional Static) */}
      <Typography variant="subtitle2" gutterBottom>Categories</Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>Mobiles & Accessories</Typography>
      <Typography variant="body1" mb={2}><b>Mobiles</b></Typography>

      {/* Price Filter */}
      <Typography variant="subtitle2" gutterBottom>Price</Typography>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        min={0}
        max={30000}
      />
      <Grid container spacing={2} mb={2}>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Min</MenuItem>
            <MenuItem value={0}>₹0</MenuItem>
            <MenuItem value={5000}>₹5,000</MenuItem>
            <MenuItem value={10000}>₹10,000</MenuItem>
            <MenuItem value={15000}>₹15,000</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <Select
            fullWidth
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Max</MenuItem>
            <MenuItem value={10000}>₹10,000</MenuItem>
            <MenuItem value={20000}>₹20,000</MenuItem>
            <MenuItem value={30000}>₹30,000+</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Brand Filter with Search */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search brand"
            fullWidth
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            style={{ marginBottom: '0.5rem' }}
          />
          {filteredBrands.map((brand, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
              }
              label={brand}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Other filters like Size, Discount, Availability (as before) */}
      {/* You can add them similarly if needed */}
    </div>
  );
};

export default CustomFilters;
