"use client";
import { useState } from "react";
import { DragAndDrop } from "./drag-and-drop";
import Form from "./form";

const STEPS = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

async function* generateCode(res: Response) {
  // Es un afuncion que puede devolver mas de dun resultado. Hace un yield.
  // un yield puede lanzar un valor   pero luego puede lanzar otro valor  y otro valor.
  // fucnion generadora va generando resultados.
  const reader = res.body?.getReader();
  const decoder = new TextDecoder("utf-8");

  if (reader == null) return;

  while (true) {
    // Esto es para leer datos hasta que se termine de stremear
    const { done, value } = await reader.read(); // cuando el reader nos diga que terminamos, romperemos el ciclo.
    const chunk = decoder.decode(value); // es un troco de los datos que nos van llegando. Lo tenemos que decodificar.
    yield chunk; // Cada vez que nos llegue un nuwevo resultado lo anadimos al resultado anterior.
    console.log(chunk);
    if (done) break;

    console.log(decoder.decode(value));
  }
}

export default function Home() {
  const [result, setResult] = useState("");
  const [step, setStep] = useState(STEPS.INITIAL); // Esto es para que inicie con el INITIAL

  const transformUrl2Code = async (url: string) => {
    setStep(STEPS.LOADING);
    const res = await fetch("/api/generate-code", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok || res.body == null) {
      setStep(STEPS.ERROR);
      throw new Error("Error al generar el codigo");
    }
    setStep(STEPS.SUCCESS);

    // const reader = res.body.getReader();
    // const decoder = new TextDecoder("utf-8");

    // while (true) {
    //   // Esto es para leer datos hasta que se termine de stremear
    //   const { done, value } = await reader.read(); // cuando el reader nos diga que terminamos, romperemos el ciclo.
    //   const chunk = decoder.decode(value); // es un troco de los datos que nos van llegando. Lo tenemos que decodificar.
    //   setResult((prev) => prev + chunk); // Cada vez que nos llegue un nuwevo resultado lo anadimos al resultado anterior.
    //   console.log(chunk);
    //   if (done) break;

    //   console.log(decoder.decode(value));
    // }

    for await (const chunk of generateCode(res)) {
      // con este blucle podemos recuperar cada uno de los chunks
      setResult((prev) => prev + chunk);
    }
  };
  return (
    <div className="grid grid-cols-[400px_1fr]">
      <aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-600">
        <header className="text-center">
          <h1 className="text-3xl font-semibold">Image to Code</h1>
          <h2 className="text-sm opacity-75">
            Pasa tus images a codigo en segundos
          </h2>
        </header>
        <section>Aquiiran los filtros</section>
        <footer>Desarrollado por DereckAn</footer>
      </aside>
      <main>
        <section className="max-w-5xl w-full mx-auto p-10">
          {/* // note Esto es para que se muestre el loading */}
          {step === STEPS.LOADING && (
            <div className="flex flex-col items-center justify-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {/* // note Esto es para que se muestre el formulario */}
          {step === STEPS.INITIAL && (
            <div className="flex flex-col gap-4">
              <DragAndDrop/>
              <Form transformUrl2Code={transformUrl2Code} />
            </div>
          )}

          {/* // note Esto es para que se muestre el resultado */}
          {step === STEPS.SUCCESS && (
            <div className="rounded flex flex-col gap-4 ">
              <div>
                <iframe
                  srcDoc={result}
                  className="w-full h-full border-4 rounded border-gray-700 aspect-video"
                />
              </div>
              <pre className="">
                <code>{result}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
