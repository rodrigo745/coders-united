"use client";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  router.push("/pages/auth/signin");

  // se redirecciona al login por defecto 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-screen h-screen content-center">


    </main>
  );
}