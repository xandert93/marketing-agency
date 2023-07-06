import { Grid, Typography } from '@mui/material'
import { Section } from './Section'

export const BrandsSection = () => {
  const arr = [...Array(12)]

  return (
    <Section>
      <Grid container direction="column">
        <Typography
          component="h2"
          variant="h4"
          fontWeight={600}
          letterSpacing={0.5}
          children="Brands that trust us to drive more revenue"
        />

        <Grid container>
          {arr.map((_, index) => (
            <Grid key={index} item xs={6} sm={4} lg={3}>
              {index}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Section>
  )
}
