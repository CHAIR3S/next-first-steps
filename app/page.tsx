import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Mi primer proyecto Nextjs',
  description: 'Potenciar el SEO',
  keywords: ['Pagina principal', 'Compras', 'SEO pagina']
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <span className="text-5xl">Hola mundo</span>


      <Link href='/about'>About Page</Link>
    </main>
  );
}
