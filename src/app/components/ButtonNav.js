'use client';
import { useRouter } from 'next/navigation';

const ButtonNav = () => {
    const router = useRouter()
  
    const toGame = () => {
      router.push('/pages/DinoGame'); 
    };

    return (
        <button className='btn justify-center btn-outline-primary material-icons text-decoration-none d-flex align-items-center' onClick={toGame}>sports_esports</button>
    );
}

export default ButtonNav;