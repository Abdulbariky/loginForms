import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { username, password, rememberMe });
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', fontWeight: 'bold' }}>USER LOGIN</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
        type="password"
        placeholder="Password"
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5 }}>
        <FormControlLabel
          control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} size="small" />}
          label={<Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Remember me</Typography>}
        />
        <Link href="#" variant="body2" sx={{ fontSize: '0.7rem' }}>Forgot password?</Link>
      </Box>
      <Button fullWidth variant="contained" onClick={handleSubmit} 
        sx={{ mt: 0.5, backgroundColor: '#20B2AA', borderRadius: 20, '&:hover': { backgroundColor: '#1C9B9B' }, fontSize: '0.8rem' }}>
        Sign In
      </Button>
      <Typography variant="body2" align="center" sx={{ my: 0.5, fontSize: '0.7rem' }}>OR</Typography>
      <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} 
        sx={{ borderRadius: 20, textTransform: 'none', fontSize: '0.7rem' }}>
        Continue with Google
      </Button>
    </>
  );
};

export default LoginForm;