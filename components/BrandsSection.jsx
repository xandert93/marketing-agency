import { Box, Grid, Typography } from '@mui/material'
import { Section } from './Section'
import Image from 'next/image'
import { Img } from './Img'

const styles = {
  heading: {
    mb: 5,
    color: 'text.secondary',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 5,
  },

  root: (theme) => ({
    filter: 'invert(50%)', // converts to greyscale, in effect
  }),

  image: {
    maxWidth: '100%',
    maxHeight: 32,
  },
}

export const BrandsSection = () => {
  const arr = [...Array(12)]

  return (
    <Section maxWidth="xl">
      <Grid container direction="column">
        <Typography
          component="h2"
          variant="h4"
          fontWeight={600}
          letterSpacing={0.5}
          children="Brands that trust us to drive more revenue"
        />

        <Logos />
      </Grid>
    </Section>
  )
}

const logos = [
  {
    id: 1,
    name: 'Cosmopolitan',
    imageUrl: '/brands/cosmopolitan.png',
  },
  {
    id: 2,
    name: 'DKNY',
    imageUrl: '/brands/dkny.png',
  },
  {
    id: 3,
    name: 'Elle',
    imageUrl: '/brands/elle.png',
  },
  {
    id: 4,
    name: 'GQ',
    imageUrl: '/brands/gq.png',
  },
  {
    id: 5,
    name: 'Hello',
    imageUrl: '/brands/hello.png',
  },
  {
    id: 6,
    name: 'K-Swiss',
    imageUrl: '/brands/k-swiss.png',
  },
  {
    id: 7,
    name: 'Lacoste',
    imageUrl: '/brands/lacoste.png',
  },
  {
    id: 8,
    name: 'Marie-Claire',
    imageUrl: '/brands/marie-claire.png',
  },
  {
    id: 9,
    name: 'Ralph Lauren',
    imageUrl: '/brands/ralph-lauren.png',
  },
  {
    id: 10,
    name: 'Tommy Hilfiger',
    imageUrl: '/brands/tommy-hilfiger.png',
  },
  {
    id: 11,
    name: 'Topman',
    imageUrl: '/brands/topman.png',
  },
  {
    id: 12,
    name: 'Vogue',
    imageUrl: '/brands/vogue.png',
  },
]

const Logos = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 3, md: 5, lg: 7 }}
      sx={styles.root}

      // could use gap, but then we'd lose MUI flex-wrapping with spacing functionality>
    >
      {logos.map(({ id, name, imageUrl }) => {
        return (
          <Grid
            key={id}
            item
            xs={6} // 3 logos per row on xs & sm
            md={4} // 6 logos per row on md+
            lg={3}
            textAlign="center">
            <Img src={imageUrl} sx={styles.image} alt={name} />
          </Grid>
        )
      })}
    </Grid>
  )
}
