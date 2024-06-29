import { useState } from 'react'
import * as React from 'react'
import Home from './Components/Home/Home'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
     <ChakraProvider>
     <Home/>
     </ChakraProvider>
    </>
  )
}

export default App
