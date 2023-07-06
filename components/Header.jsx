'use client'

import {
  Slide,
  AppBar,
  Toolbar,
  useScrollTrigger,
  ButtonBase,
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
} from '@mui/material'
import { MenuIcon } from '.'

export const Header = () => {
  const isScrolledDown = useScrollTrigger({ threshold: 10 })
  const isMinXl = useMediaQuery('(min-width: 1280px)')

  return (
    <Slide appear={false} in={!isScrolledDown} timeout={{ enter: 250, exit: 500 }}>
      <AppBar position="sticky" elevation={0} color="inherit">
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
          px={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
          py={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
          <Typography
            variant="h4"
            children="Marketing Agency"
            fontWeight={600}
            letterSpacing={-0.5}
            lineHeight={1.1}
          />

          {isMinXl ? <HeaderNav /> : <IconButton children={<MenuIcon fontSize="large" />} />}
        </Grid>
      </AppBar>
    </Slide>
  )
}

const links = ['What We Do', 'Case Studies', 'About Us', 'Blog', 'Insights', 'Book a Call']

const HeaderNav = () => {
  return (
    <Grid component="nav" container columnGap={7} justifyContent="flex-end">
      {links.map((text) => (
        <a key={text} href="/#" children={text} />
      ))}
    </Grid>
  )
}
