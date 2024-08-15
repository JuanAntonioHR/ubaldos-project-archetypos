'use client'

import { useEffect } from 'react';

const Carrusel = () => {
  useEffect(() => {
    // Esto asegura que el script de Bootstrap solo se ejecute en el lado del cliente.
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <section>
        
    </section>
  );
};

export default Carrusel;
