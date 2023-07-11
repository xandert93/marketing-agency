import { Box, Grid, Typography } from '@mui/material'
import { Section } from './Section'
import Image from 'next/image'

import { motion } from 'framer-motion'

const usps = [
  {
    id: 1,
    imageUrl: '/computer_white-02.webp',
    title: 'Our Partners',
    body: "We're a Meta Business Partner, Google Partner and have account managers at all major Social platforms.",
  },
  {
    id: 2,
    imageUrl: '/house_white-02.webp',
    title: 'Creative Studio',
    body: 'We combine data and platform knowledge to produce social-first video content in our studio that is designed to convert your followers into customers.',
  },
  {
    id: 3,
    imageUrl: '/hat_white-02.webp',
    title: 'Multi-Award Winning',
    body: "We've recently won Best Integrated Paid Media Campaign of the Year & Best Use of Facebook & Instagram Ads as well as others!",
  },
  {
    id: 4,
    imageUrl: '/world_white-03.webp',
    title: 'Diverse-Platform Focus',
    body: 'We understand the importance of scaling brands across multiple social & ad platforms to diversify traffic sources and audience growth which allows us to future-proof your business.',
  },
  {
    id: 5,
    imageUrl: '/team-solid-02.webp',
    title: 'Our Approach',
    body: "We treat our clients' businesses as if they were our own. Putting their success before anything else.",
  },
]

export const USPsSection = () => {
  return (
    <Section maxWidth="xl">
      <Typography
        component="h2"
        variant="h4"
        children="What makes us different to other Social Media Agencies..."
        fontWeight={600}
      />
      <Grid container spacing={4}>
        {usps.map((usp) => (
          <Grid key={usp.id} item xs={12} md={6} lg={4}>
            <USP {...usp} />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

const USP = ({ imageUrl, title, body }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.75 }}>
      <Grid container direction="column" rowGap={2} bgcolor="primary.main" p={4} borderRadius={2}>
        <Image src={imageUrl} height={40} width={40} style={{ display: 'block' }} />
        <Typography component="h3" fontWeight={600} children={title} />
        <Typography children={body} />
      </Grid>
    </motion.div>
  )
}
