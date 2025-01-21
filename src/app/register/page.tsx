export const metadata = {
  title: "Regístrate",
  description: "Página para registrar un nuevo usuario",
}

import ClientForm from './ClientForm';

export default function Register() {
  return (
    <div className='grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20'>
      <ClientForm />
    </div>
  );
}