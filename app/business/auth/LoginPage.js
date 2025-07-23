'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';
import HomeIcon from '@mui/icons-material/Home';
import {IconButton, Box } from '@mui/material';
import Link from 'next/link'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      router.push('/business');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    
    <>
    <div>
      <Box sx={{ marginLeft: 'auto' }}>
        <Link href="/" passHref>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>
      </Box>
    </div>
      <div className="mt-[60px] p-[100px] flex items-center justify-center bg-gradient-to-br from-gray-200 to-emerald-700">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-serif">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-800 text-white py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
}