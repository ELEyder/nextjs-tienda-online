'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Link from 'next/link';

export default function ClientForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
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
      <h1 className='text-center'>Inicia Sesión</h1>
      <TextField
        id="outlined-input"
        label="Usuario"
        name="username"
        variant="standard"
        value={form.username}
        onChange={changeValue}
        fullWidth
        margin="normal"
        autoComplete='username'
        required
      />
      <TextField
        id="outlined-password-input"
        label="Password"
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
      <Button type="submit" variant="contained" color="primary">
        Ingresar
      </Button>
      <Link href="/register">¿No tienes cuenta? <span className='text-blue-500'>Regístrate</span></Link>
      <Link href="/" className='text-center text-blue-500'>Regresar al menú</Link>
    </form>
  );
}
