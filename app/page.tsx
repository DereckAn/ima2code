import Form from "./form";

export default function Home() {
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
          <Form />
        </section>
      </main>
    </div>
  );
}
