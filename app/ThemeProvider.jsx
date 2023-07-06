'use client'

import { Poppins } from 'next/font/google'

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  responsiveFontSizes as createResponsiveTheme,
} from '@mui/material'

import { createTheme as createMuiTheme } from '@mui/material'

const palette = {
  primary: {
    main: '#65e2ca',
  },
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 640, // 600*
    md: 768, // 900*
    lg: 1024, // 1200*
    xl: 1280, // 1536*
    xxl: 1536,
  },
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const typography = {
  fontFamily: poppins.style.fontFamily,
}

const baseTheme = createMuiTheme({ typography, breakpoints, palette })

const theme = createResponsiveTheme(baseTheme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 4,
})

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
