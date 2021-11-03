import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181823",
            "800": "#1f2029",
            "600": "#484d63",
            "500": "#616480",
            "400": "#79709a",
            "300": "#9699b8",
            "200": "#b3b5c6",
            "100": "#d1d20c",
            "50": "#eeeef2",

        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})