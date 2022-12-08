import { Button, Input } from '@mui/material';
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import '../App.css'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    navigate(`/boats`);
  };

  return (
    <div className="App">
      <form className="form">
        <Input
          labelText="username"
          id="username"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={handleUsernameChange}
          type="text"
        />
        <Input
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={handlePasswordChange}
          type="password"
        />
        <Button type="button" color="primary" className="form__custom-button" onClick={handleLogin}>
          Log in
        </Button>
      </form>
    </div>
  );
}
