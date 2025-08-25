import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem'
  },
  field: {
    marginBottom: '1rem'
  },
  error: {
    color: theme.palette.error.main,
    fontSize: '0.875rem',
    marginTop: '0.25rem'
  },
  button: {
    marginTop: '1rem'
  }
}));

export default useStyles;
