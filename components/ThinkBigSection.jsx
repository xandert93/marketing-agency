import { Box, Grid, Typography } from '@mui/material'

const stats = [
  {
    id: 1,
    stat: '93%',
    caption: 'of clients increase their return on ad spend within 2 months',
  },
  {
    id: 2,
    stat: '150m',
    caption: 'views across our video creatives',
  },
  {
    id: 3,
    stat: '£40m+',
    caption: 'in trackable revenue across our client portfolio',
  },
]

export const ThinkBigSection = () => {
  return (
    <Box bgcolor="primary.main" p={8} textAlign="center">
      <Typography
        component="h2"
        variant="h4"
        children="We help CMO's, Marketing Managers & marketing teams Think Big"
        fontWeight={600}
      />

      <Grid container justifyContent="center" spacing={2}>
        {stats.map((stat) => (
          <Grid key={stat.id} item xs={12} sm={6} lg={4} xl={3}>
            <Stat {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const Stat = ({ stat, caption }) => {
  return (
    <Box>
      <Typography
        children={stat}
        fontFamily="Post Box"
        color="white"
        sx={{ WebkitTextStroke: { xs: '3px black', md: '4px black' } }}
        fontSize={{ xs: 76, md: 106, xl: 136 }}
      />
      <Typography children={caption} variant="h6" component="p" fontWeight={600} />
    </Box>
  )
}
