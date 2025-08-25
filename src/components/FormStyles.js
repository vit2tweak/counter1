import { makeStyles } from '@mui/styles';

export const useLoginStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(2)
  },
  formContainer: {
    padding: theme.spacing(3),
    maxWidth: '400px',
    width: '100%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  },
  submitButton: {
    marginTop: theme.spacing(2)
  }
}));