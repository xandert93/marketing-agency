import { ButtonBase } from '@mui/material'

const styles = {
  fontFamily: 'button.fontFamily',
  fontSize: 'body1.fontSize',
  fontWeight: 'button.fontWeight',

  backgroundColor: 'primary.main',
  borderRadius: 6.25,
  padding: ({ spacing }) => spacing(1.5, 4),
  boxShadow: ({ shadows }) => shadows[3],

  transition: ({ transitions }) => transitions.create(['background-color', 'color', 'box-shadow']),

  ':hover': {
    backgroundColor: 'text.primary',
    color: 'primary.main',
    boxShadow: ({ shadows }) => shadows[1],
  },
}

export const ContainedButton = (props) => {
  return <ButtonBase sx={styles} {...props} />
}
