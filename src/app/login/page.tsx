export const metadata = {
  title: "Iniciar Sesión",
  description: "Página para iniciar sesión"
}

import ClientForm from './ClientForm';

export default function Login() {
  return (
    <div className='grid grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20'>
      <ClientForm />
    </div>
  );
}