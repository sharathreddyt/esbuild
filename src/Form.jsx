import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, SimpleGrid } from '@chakra-ui/react';

const Form = () => {
    const [housePrice, setHousePrice] = useState('');
    const [downPaymentOption, setDownPaymentOption] = useState('percentage');
    const [downPaymentPercentage, setDownPaymentPercentage] = useState('');
    const [downPaymentAmount, setDownPaymentAmount] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanYears, setLoanYears] = useState('');
    const [hoaAmount, setHoaAmount] = useState('');
    const [insuranceAmount, setInsuranceAmount] = useState('');
    const [pmi, setPmi] = useState('');

    const handleDownPaymentOptionChange = (event) => {
        setDownPaymentOption(event.target.value);
    };

    const calculateLoanAmount = () => {
        if (downPaymentOption === 'percentage') {
            const calculatedLoanAmount = housePrice - (housePrice * downPaymentPercentage) / 100;
            setLoanAmount(calculatedLoanAmount);
        } else {
            const calculatedLoanAmount = housePrice - downPaymentAmount;
            setLoanAmount(calculatedLoanAmount);
        }
    };

    return (
        <Box>
            <SimpleGrid columns={2} spacing={10}>
            <fieldset>
            <legend>House Price</legend>
            
            </fieldset>  

            </SimpleGrid>
                  
           
        </Box>
    );
};

export default Form;