import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Link, InputAdornment, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, signInWithEmailAndPassword } from './firebaseConfig';

const LoginForm = ({ setSnackbar }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      const { username, password } = JSON.parse(rememberedUser);
      setUsername(username);
      setPassword(password);
      setRememberMe(true);
    }
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.username = username ? "" : "Username is required";
    tempErrors.password = password ? "" : "Password is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await signInWithEmailAndPassword(auth, username, password);
        setSnackbar({ open: true, message: 'Login successful!', severity: 'success' });
        if (rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
        } else {
          localStorage.removeItem('rememberedUser');
        }
      } catch (error) {
        setSnackbar({ open: true, message: 'Login failed: ' + error.message, severity: 'error' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        USER LOGIN
      </Typography>
      <TextField
        fullWidth
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={!!errors.username}
        helperText={errors.username}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon sx={{ color: '#20B2AA' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
        variant="outlined"
      />
      <TextField
        fullWidth
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: '#20B2AA' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 1 }}
        variant="outlined"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} size="small" />}
          label={<Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Remember me</Typography>}
        />
        <Link href="#" variant="body2" sx={{ fontSize: '0.75rem', color: '#20B2AA' }}>Forgot password?</Link>
      </Box>
      <Button 
        fullWidth 
        variant="contained" 
        onClick={handleSubmit}
        disabled={isLoading}
        sx={{ mb: 2, backgroundColor: '#20B2AA', '&:hover': { backgroundColor: '#1C9B9B' }, fontSize: '0.9rem', py: 1 }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Sign In'}
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ flex: 1, height: 1, bgcolor: 'grey.300' }} />
        <Typography variant="body2" sx={{ px: 2, color: 'grey.500', fontSize: '0.75rem' }}>OR</Typography>
        <Box sx={{ flex: 1, height: 1, bgcolor: 'grey.300' }} />
      </Box>
      <Button 
        fullWidth 
        variant="outlined" 
        startIcon={<GoogleIcon />} 
        sx={{ borderColor: '#20B2AA', color: '#20B2AA', '&:hover': { borderColor: '#1C9B9B' }, fontSize: '0.8rem', py: 1 }}
      >
        Continue with Google
      </Button>
    </>
  );
};

export default LoginForm;