'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function ClientForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar la recarga de la página
    console.log("Datos cargados: ", form);
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <form className='border-2 border-black-500 rounded-md p-10 gap-4 grid' onSubmit={submit}>
      <h1 className='text-center'>Regístrate</h1>
      <TextField
        id="outlined-input"
        label="Usuario"
        name="username"
        type="text"
        variant="standard"
        value={form.username}
        onChange={changeValue}
        fullWidth
        margin="normal"
        autoComplete='username'
        required
      />
      <TextField
        id="outlined-input-email"
        label="Correo Electrónico"
        name="email"
        type="email"
        variant="standard"
        value={form.email}
        onChange={changeValue}
        fullWidth
        margin="normal"
        autoComplete='email'
        required
      />
      <TextField
        id="outlined-password-input"
        label="Contraseña"
        name="password"
        type="password"
        variant="standard"
        value={form.password}
        onChange={changeValue}
        fullWidth
        margin="normal"
        autoComplete='current-password'
        required
      />
      <TextField
        id="outlined-repeat-password-input"
        label="Repite la contraseña"
        name="confirmPassword"
        type="password"
        variant="standard"
        value={form.confirmPassword}
        onChange={changeValue}
        fullWidth
        margin="normal"
        autoComplete='current-password'
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Registrar
      </Button>
      <Link href="/login">¿Ya tienes una cuenta? <span className='text-blue-500'>Inicia Sesión</span></Link>
    </form>
  );
}
