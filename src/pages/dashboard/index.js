import React from 'react'
import { Button } from '@mui/material'


export default function index() {
    const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    window.location.replace('/auth/signin');
    }

  return (
    <div>index

    <Button onClick={handleSignOut}>Sign Out</Button>
    </div>

  )
}

