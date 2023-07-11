import { Box, Grid, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box component="footer" bgcolor="black" color="white">
      <Typography
        component="h3"
        fontWeight={600}
        children="The only time you’ll want to be a sheep."
      />

      <Grid container>
        <Grid item>
          <Typography children="Don't be a stranger" />
        </Grid>
        <Grid item>
          <Typography children="Learn" />
        </Grid>
        <Grid item>
          <Typography children="Our Services" />
        </Grid>
      </Grid>
    </Box>
  )
}
