import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Paper } from '@mui/material';
import { useLoginStyles } from './FormStyles';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required')
});

const Login = ({ onLogin }) => {
  const classes = useLoginStyles();

  return (
    <Box className={classes.container}>
      <Paper className={classes.formContainer}>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={onLogin}
        >
          {({ errors, touched, handleChange }) => (
            <Form className={classes.form}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                size="small"
                fullWidth
                margin="dense"
              />
              <TextField
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                size="small"
                fullWidth
                margin="dense"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submitButton}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Login;