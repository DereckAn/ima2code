'use client';
import Form from "./form";

export default function Home() {
  const transformUrl2Code = async (url: string) => {
    const res = fetch("/api/generate-code", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!(await res).ok || !(await res).body == null) {
      throw new Error("Error al generar el codigo");
    }
    const reader = (await res).body!.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      const chunk = decoder.decode(value);
      console.log(chunk);
      if (done) break;

      console.log(decoder.decode(value));
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
        <section className="max-w-2xl mx-auto p-10">
          <Form transformUrl2Code={transformUrl2Code} />
        </section>
      </main>
    </div>
  );
}
