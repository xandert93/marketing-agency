'use client'

import { Box, Button, Grid, Typography } from '@mui/material'
import { Span } from './Span'
import Image from 'next/image'
import { Section } from './Section'

export const HeroSection = () => {
  return (
    <Section maxWidth="xxl">
      <Grid
        container
        flexDirection={{ xs: 'column-reverse', md: 'initial' }}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={12} md={6}>
          <LHS />
        </Grid>
        <Grid item xs={12} md={6}>
          <RHS />
        </Grid>
      </Grid>
    </Section>
  )
}

const LHS = () => {
  return (
    <Grid container direction="column" gap={0}>
      <LHSText />
      <LHSActions />
    </Grid>
  )
}

const RHS = () => {
  return <Image src="/phone-03.webp" width={100} height={100} />
}

const LHSText = () => {
  return (
    <Typography component="h1" variant="h3" fontWeight={600} letterSpacing={1.5} lineHeight={1.75}>
      The{' '}
      <Span
        sx={{
          position: 'relative',
          ':after': {
            content: '""',
            position: 'absolute',
            bottom: -24,
            left: -4,
            right: -4,
            backgroundImage: 'url("/underline-blue.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 48,
          },
        }}>
        results-driven
      </Span>{' '}
      Social first agency that you've been looking for.
    </Typography>
  )
}

const LHSActions = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Button
          variant="contained"
          textTransform="initial"
          fullWidth
          disableElevation
          sx={{ borderRadius: 10, px: 4, py: 1.5 }}>
          Book a Call
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          variant="outlined"
          textTransform="initial"
          fullWidth
          sx={{ borderRadius: 10, px: 4, py: 1.5 }}>
          Find out More
        </Button>
      </Grid>
    </Grid>
  )
}
