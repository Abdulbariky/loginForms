import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, LinearProgress, CircularProgress } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import zxcvbn from 'zxcvbn';
import { auth, createUserWithEmailAndPassword } from './firebaseConfig';

const SignupForm = ({ setSnackbar }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "Name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email is not valid";
    tempErrors.phone = /^\d{10}$/.test(phone) ? "" : "Phone number should be 10 digits";
    tempErrors.password = password.length >= 8 ? "" : "Password should be at least 8 characters";
    tempErrors.confirmPassword = password === confirmPassword ? "" : "Passwords do not match";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(zxcvbn(newPassword).score);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setSnackbar({ open: true, message: 'Registration successful!', severity: 'success' });
      } catch (error) {
        setSnackbar({ open: true, message: 'Registration failed: ' + error.message, severity: 'error' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
        CREATE ACCOUNT
      </Typography>
      <TextField
        fullWidth
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={!!errors.fullName}
        helperText={errors.fullName}
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
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon sx={{ color: '#20B2AA' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
        variant="outlined"
      />
      <TextField
        fullWidth
        placeholder="Phone No."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon sx={{ color: '#20B2AA' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
        variant="outlined"
      />
      <TextField
        fullWidth
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
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
      <Box sx={{ width: '100%', mb: 2 }}>
        <LinearProgress
          variant="determinate"
          value={(passwordStrength / 4) * 100}
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: passwordStrength < 2 ? 'red' : passwordStrength < 4 ? 'orange' : 'green',
            },
          }}
        />
      </Box>
      <TextField
        fullWidth
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: '#20B2AA' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
        variant="outlined"
      />
      <Button 
        fullWidth 
        variant="contained" 
        onClick={handleSubmit}
        disabled={isLoading}
        sx={{ backgroundColor: '#20B2AA', '&:hover': { backgroundColor: '#1C9B9B' }, fontSize: '0.9rem', py: 1 }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}
      </Button>
    </>
  );
};

export default SignupForm;