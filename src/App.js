import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Snackbar, Alert } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import BackgroundSwoosh from './BackgroundSwoosh';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/login');
    }
  }, [location, navigate]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <BackgroundSwoosh>
      <Box sx={{ width: '100%', maxWidth: 350, margin: 'auto', bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <LoginForm setSnackbar={setSnackbar} />
                <Typography variant="body2" align="center" sx={{ mt: 2, fontSize: '0.75rem' }}>
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/signup" sx={{ color: '#20B2AA' }}>
                    Sign up here
                  </Link>
                </Typography>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignupForm setSnackbar={setSnackbar} />
                <Typography variant="body2" align="center" sx={{ mt: 2, fontSize: '0.75rem' }}>
                  Already have an account?{' '}
                  <Link component={RouterLink} to="/login" sx={{ color: '#20B2AA' }}>
                    Sign in
                  </Link>
                </Typography>
              </>
            }
          />
          <Route
            path="*"
            element={
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  404 - Page Not Found
                </Typography>
                <Link component={RouterLink} to="/login" sx={{ color: '#20B2AA' }}>
                  Go to Login
                </Link>
              </Box>
            }
          />
        </Routes>
      </Box>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </BackgroundSwoosh>
  );
};

export default App;
