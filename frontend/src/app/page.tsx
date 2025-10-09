import { Hero } from '@/components/Hero';
import { Header } from '../components/Header';
import { Process } from '@/components/Process';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Hero />
      <Process />
   </main>
  );
}