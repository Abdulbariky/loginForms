import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import BackgroundSwoosh from './BackgroundSwoosh';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <BackgroundSwoosh>
      <Box sx={{ width: '100%', maxWidth: 350, margin: 'auto', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 3 }}>
        {showLogin ? (
          <>
            <LoginForm />
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              Don't have an account? <Link href="#" onClick={toggleForm}>Sign up here</Link>
            </Typography>
          </>
        ) : (
          <>
            <SignupForm />
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              Already have an account? <Link href="#" onClick={toggleForm}>Sign in</Link>
            </Typography>
          </>
        )}
      </Box>
    </BackgroundSwoosh>
  );
};

export default App;