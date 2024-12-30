import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <Typography variant="h4" className="mb-6 text-center">Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          className="mb-6"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mb-4"
        >
          Login
        </Button>
        <Typography variant="body2" color="text.secondary" className="text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </Typography>
      </form>
    </div>
  );
}
