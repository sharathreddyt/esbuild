import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, RadioGroup, Radio, Stack, SimpleGrid, Flex, Spacer } from '@chakra-ui/react';

const Form = () => {
    return (
        <Box>
            <SimpleGrid columns={2} spacing={2}>
                <fieldset style={styles.fieldset}>
                    <legend style={styles.legend}>House Details</legend>
                    <FormControl display={"flex"} paddingBottom={2}>
                        <Flex width="100%" alignItems="center">
                            <Box>
                                <FormLabel>House Price</FormLabel>
                            </Box>
                            <Spacer />
                            <Box>
                                <Input />
                            </Box>
                        </Flex>
                    </FormControl>
                    <FormControl display={"flex"} paddingBottom={2}>
                        <Flex width="100%" alignItems="center" >
                            <Box>
                                <FormLabel>Down Payment</FormLabel>
                            </Box>
                            <Spacer />
                            <Box paddingRight={2}>
                                <RadioGroup >
                                    <Stack direction='row'>
                                        <Radio value='$'>$</Radio>
                                        <Radio value='%'>%</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>
                            <Box>
                                <Input />
                            </Box>
                        </Flex>
                    </FormControl>

                    <FormControl display={"flex"} paddingBottom={2}>
                        <Flex width="100%" alignItems="center">
                            <Box>
                                <FormLabel>Loan Amount</FormLabel>
                            </Box>
                            <Spacer />
                            <Box>
                                <Input />
                            </Box>
                        </Flex>
                    </FormControl>
                </fieldset>
                <fieldset style={styles.fieldset}>
                    <legend style={styles.legend}>Additional Expense</legend>
                </fieldset>
                <fieldset style={styles.fieldset}>
                    <legend style={styles.legend}>Additional Payments</legend>
                </fieldset>

            </SimpleGrid>
        </Box>
    );
};


const styles = {
    fieldset: {
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '1rem',
        marginBottom: '1rem',
    },
    legend: {
        fontSize: '1.2rem',
        color: '#333',
    },
};

export default Form;