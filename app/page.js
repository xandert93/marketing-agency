'use client'

import { HeroSection } from '@/components'
import { BrandsSection } from '@/components/BrandsSection'
import { ContactSection } from '@/components/ContactSection'
import { MissionsSection } from '@/components/MissionsSection'
import { USPsSection } from '@/components/USPsSection'
import { Box, Container, Typography, Grid, Button } from '@mui/material'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <MissionsSection />
      <USPsSection />
      <ContactSection />
      {/* <TestimonialsSection /> */}
    </main>
  )
}

const testimonials = [
  {
    id: 1,
    author: {
      name: 'John Doe',
      avatarUrl: '/path/to/avatar1.png',
    },
    title: 'Great Agency!',
    text: 'MA Agency helped me boost my business and reach a wider audience through social media advertising. Highly recommended!',
  },
  {
    id: 2,
    author: {
      name: 'Jane Smith',
      avatarUrl: '/path/to/avatar2.png',
    },
    title: 'Excellent Results',
    text: "I've been working with MA Agency for several months now and the results have been outstanding. They truly understand social media marketing.",
  },
  {
    id: 3,
    author: {
      name: 'Michael Johnson',
      avatarUrl: '/path/to/avatar3.png',
    },
    title: 'Impressive Strategy',
    text: 'MA Agency developed a comprehensive social media strategy that aligned perfectly with my business goals. I saw a significant increase in engagement and conversions.',
  },
  {
    id: 4,
    author: {
      name: 'Sarah Thompson',
      avatarUrl: '/path/to/avatar4.png',
    },
    title: 'Professional and Reliable',
    text: 'I have had a great experience working with MA Agency. They are highly professional, reliable, and always deliver exceptional results.',
  },
  {
    id: 5,
    author: {
      name: 'David Wilson',
      avatarUrl: '/path/to/avatar5.png',
    },
    title: 'Outstanding Service',
    text: 'MA Agency provides an outstanding level of service. They are responsive, attentive to detail, and go above and beyond to ensure client satisfaction.',
  },
]

const TestimonialsSection = () => {
  return (
    <Box py={8} bgcolor="primary.main" color="white">
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" mb={4}>
          Testimonials
        </Typography>
        <div>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Container>
    </Box>
  )
}

const Testimonial = ({ id, author, title, text }) => {
  return (
    <Box key={id} my={4}>
      <img src={author.avatarUrl} alt={author.name} />
      <Typography variant="h6" mb={1}>
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
  )
}
