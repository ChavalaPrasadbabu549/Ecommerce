import React from 'react';
import '../../../styles/customaccordion.css'
import { Accordion, AccordionDetails, AccordionSummary, } from '@mui/material'

const CustomAccordion = ({ title, defaultExpanded = false, expandIcon, detailsContent, onChange }) => {
    return (
        <div className='customaccordion'>
            <Accordion defaultExpanded={defaultExpanded} onChange={onChange}>
                <AccordionSummary expandIcon={expandIcon}>
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    {detailsContent}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default CustomAccordion
