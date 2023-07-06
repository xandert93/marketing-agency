import { Box, Button, Typography } from '@mui/material'

export const ContactSection = () => {
  return (
    <Box bgcolor="rgb(249, 249, 249)">
      <Typography component="h2" fontWeight={600} children="Let’s work together" />
      <Typography children="Don't be sheepish. Get in touch to see how we can help you." />
      <Button variant="contained" children="Let's chat" />
    </Box>
  )
}
