"use client"
import Login from "@/components/login/login";
import CreateCuenta from "@/components/crearCuenta/Create";
import {useState } from "react";





export default function Home() {

  const [mostrar, setMostrar] = useState(true)
  const cambio = () => {mostrar ? setMostrar(false) : setMostrar(true)}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Coders United
      {
        mostrar ? <Login cambio = {cambio}/> : <CreateCuenta cambio = {cambio}/> 
      }
    </main>
  );
}
