"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {

  const { data: session } = useSession();

  const router = useRouter();

  router.push("/pages/auth/signin");

  // se redirecciona al login por defecto 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen h-screen content-center">


    </main>
  );
}