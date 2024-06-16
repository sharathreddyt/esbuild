import React from 'react';
import { Box, VStack, Heading, Divider } from '@chakra-ui/react'
import Form from './components/Form/Form'


const Rammi = () => {
    return (
            <Box width="100%" p={4}>
                <Heading as='h1' size='xl' noOfLines={1} textAlign="center"> Mortgage Caluculator</Heading>
                <Divider orientation='horizontal' />
                <Form/>
            </Box>
    );
};

export default Rammi;