import Image from 'next/image'
import { Section } from './Section'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CoverImg } from './CoverImg'
import { Img } from './Img'

import { motion } from 'framer-motion'
import { ContainedButton } from './ContainedButton'

const missions = [
  {
    id: 1,
    title: 'Creative Social Media content, built for algorithms',
    bodies: [
      "Content for Social Media is our bread and butter. Whether it's for always-on organic social or large-scale social campaigns, our team knows how to deliver content that social algorithms love.",
      "We have a data-driven approach that's forever adapting based on what's working and what content your audience is engaging with.",
      'Our team are a social-media-obsessed bunch! They love nothing more than working with fast-growth brands who know the importance of building an organic social presence.',
    ],
    imageUrl: '/mission-1.webp',
    actionText: 'See our approach',
  },
  {
    id: 2,
    title: 'Paid Media campaigns that scale',
    bodies: [
      'Having won 4x awards for our Paid Media Campaigns, our dedicated team of media buyers know exactly what needs to be done to achieve the best ROI from Paid Social & Paid Search.',
      "We’ve spent over £10m+ in the past 12 months across our client's ad accounts whilst driving £44.2m in attributed revenue.",
      'We love working with ambitious marketing teams & founders that want to achieve better efficiency, profitability & scalability with their advertising campaigns.',
    ],
    imageUrl: '/mission-2.webp',
    actionText: 'See how we do it',
  },
  {
    id: 3,
    title: 'Social-first video content that engages & converts',
    bodies: [
      'Whether you’re looking for engaging TikToks, Instagram Reels, Videos for Paid Social or user-generated videos, we can help produce content designed to drive more sales both in our in-house studio or on location.',
      "Our team of creatives include videographers, photographers, motion graphic designers, editors, graphic designers, strategists & planners - so we have an experienced team ready to create social-first content that'll explode your brand.",
    ],
    imageUrl: '/mission-3.webp',
    actionText: 'See our examples',
  },
  {
    id: 4,
    title: 'Trackable results with Influencer Marketing',
    bodies: [
      'Influencers and creators play a core role in any social campaign, helping brands to produce & distribute authentic content, drive mass awareness and drive trackable revenue.',
      'Our campaign-driven & always-on influencer activity includes a mix of micro, macro & celebrity influencers to ensure your target market is being recommended your product by their favourite influencers.',
    ],
    imageUrl: '/mission-4.webp',
    actionText: 'See our process',
  },
]

export const MissionsSection = () => {
  return (
    <Section maxWidth={false} sx={{ bgcolor: 'rgb(249, 249, 249)' }}>
      {missions.map((mission, index) => {
        const isEven = index % 2 === 0
        return (
          <Mission key={mission.id} {...mission} minMdDirection={isEven ? 'row' : 'row-reverse'} />
        )
      })}
    </Section>
  )
}

const Mission = ({ minMdDirection, title, bodies, imageUrl, actionText }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.75 }}>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: minMdDirection }}
        alignItems="center"
        spacing={4}
        p={4}>
        <Grid item xs={12} md={6}>
          <MissionDetail {...{ title, bodies, actionText }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Img
            src={imageUrl}
            sx={{
              aspectRatio: '1/1',
              width: '100%',
              objectFit: 'cover',
              borderRadius: 1,
              display: 'block',
            }}
          />
        </Grid>
      </Grid>
    </motion.div>
  )
}

const MissionDetail = ({ title, bodies, actionText }) => {
  return (
    <Grid container direction="column" alignItems="start" rowGap={3}>
      <Typography component="h2" variant="h4" children={title} fontWeight={600} lineHeight={1.35} />
      <Grid container direction="column" rowGap={2}>
        {bodies.map((body, index) => (
          <Typography key={index} children={body} />
        ))}
      </Grid>
      <ContainedButton children={actionText} />
    </Grid>
  )
}
