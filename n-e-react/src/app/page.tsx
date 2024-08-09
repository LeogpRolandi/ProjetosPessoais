"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState<number | null>(null);
  const [number1, setNumber1] = useState<number | null>(null);
  const [contagem, setContagem] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  function gerarNumero() {
    if (contagem.length === 0) return;

    let min = 0;
    let max = contagem.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    const result = contagem[index];
    setNumber(result);
    const novaContagem = contagem.filter((_, i) => i !== index);
    setContagem(novaContagem);
  }
  function gerarOutroNumero() {
    if (contagem.length === 0) return;

    let min = 0;
    let max = contagem.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultado = contagem[index];
    setNumber1(resultado);
  }

  useEffect(() => {
    gerarNumero(), gerarOutroNumero();
  }, []);

  function mostrarMaior(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (number === null) return;

    const maiores = contagem.filter((num) => num > number);
    if (maiores.length === 0) return; // Não há números maiores disponíveis

    const min = 0;
    const max = maiores.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultado = maiores[index];
    setNumber1(resultado);
    setNumber(resultado);
    console.log("numero 1 : " + number, "numero 2: " + number1);
  }
  function mostrarMenor(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault;
    if (number === null) return;

    const menores = contagem.filter((num) => num < number);
    if (menores.length === 0) return; // Não há números maiores disponíveis

    const min = 0;
    const max = menores.length - 1;
    const index = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultado = menores[index];
    setNumber1(resultado);
    setNumber(resultado);
    console.log("numero 1 : " + number, "numero 2: " + number1);
  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-5">
      <div>
        <div className="text-5xl">{number}</div>
      </div>
      <div className="flex text-xl gap-8">
        <button onClick={mostrarMaior}>Maior</button>
        <button onClick={mostrarMenor}>Menor</button>
      </div>
    </div>
  );
}
