import { Box } from '@mui/material'
import Image from 'next/image'

export const CoverImg = ({ sx, src, ...props }) => {
  return <Box component={Image} src={src} fill sx={{ objectFit: 'cover', ...sx }} {...props} />
}
