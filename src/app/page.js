"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full h-full">

      Coders United ( LOGIN )
      <Link href="/pages/0/inicio">Ingresar con google</Link>
    </main>
  );
}