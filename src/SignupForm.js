import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', { fullName, email, phone, password, confirmPassword });
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', fontWeight: 'bold' }}>CREATE ACCOUNT</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        margin="dense"
        variant="outlined"
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        margin="dense"
        variant="outlined"
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Phone No."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
        margin="dense"
        variant="outlined"
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        margin="dense"
        variant="outlined"
      />
      <TextField
        fullWidth
        size="small"
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        margin="dense"
        variant="outlined"
      />
      <Button fullWidth variant="contained" onClick={handleSubmit} 
        sx={{ mt: 1, backgroundColor: '#20B2AA', borderRadius: 20, '&:hover': { backgroundColor: '#1C9B9B' }, fontSize: '0.8rem' }}>
        Sign Up
      </Button>
    </>
  );
};

export default SignupForm;