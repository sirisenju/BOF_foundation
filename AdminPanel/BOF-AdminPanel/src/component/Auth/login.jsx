import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import bycrypt from "bcryptjs";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fetch the user from the 'users' table
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      alert('Invalid email or password.');
      return;
    }

    // Compare the hashed password
    const passwordMatch = await bycrypt.compare(password, user.password);

    if (!passwordMatch) {
      alert('Invalid email or password.');
      return;
    }

    if (user.role === 'admin') {
      // Save user data to localStorage or context
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/view');
    } else {
      alert('You are not authorized to access this page.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br/>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

