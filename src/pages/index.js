import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // In production, you should verify the access token with the server
        router.replace('/dashboard');
      } else {
        router.replace('/auth/signin');
      }
    }
  }, [router]);

  return null; // This component doesn't render anything
}