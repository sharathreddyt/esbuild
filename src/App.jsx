import { useState } from 'react'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  Container
} from '@chakra-ui/react'
import Rammi from './Rammi'
import './App.css'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {

  return (
    <Container centerContent={true} w='100%' p={4} height="100%">
     <ChakraBaseProvider theme={chakraTheme}><Rammi/></ChakraBaseProvider>
    </Container>
  )
}

export default App
