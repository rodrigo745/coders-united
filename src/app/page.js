import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full h-full">
      Coders United ( LOGIN )
      <Link href="/pages/dashboard/inicio">Inicio</Link>
    </main>
  );
}
