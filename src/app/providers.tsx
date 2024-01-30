'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      bury: '#DBDBD0',
      fioletowy: '#B8A9C9',
      bananowy: '#FFF2D6',
      blekit: '#ABE6EB',
      500: '#000000', //chceck Radio
      600: '#000000', //chceck Radio
      800: '#000000', //chceck Radio

      // ...
      900: "#1a202c",
    },

  },
})



export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme} >{children}</ChakraProvider>
}