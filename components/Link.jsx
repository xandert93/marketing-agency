import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import NextLink from 'next/link'

export const Link = (props) => {
  return <MuiLink component={NextLink} {...props} />
}
